FROM dydxprotocol/node:12.18.3-alpine

ARG NPM_TOKEN

RUN adduser -S dydx
RUN mkdir -p /home/dydx/app
RUN chown dydx -R /home/dydx/app
USER dydx

WORKDIR /home/dydx/app

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc

COPY ./package.json ./package-lock.json ./
RUN npm ci --loglevel warn --production

COPY ./.env* ./
COPY ./build ./build

CMD ["./node_modules/@dydxprotocol/node-service-base/scripts/container-run.sh"]
