<p align='center'><img src='https://s3.amazonaws.com/dydx-assets/dydx_logo_black.svg' width='256' /></p>

The goal of this repository is to verify that your development environment is set up to start working on code at dYdX. Successfully running the tests in this repo confirms that your environment is close to or completely set up to work with dYdX repositories.

To run tests:
* First, to import all libraries needed for these tests (as well as many needed for our actual services) run `npm i`.
* In a new terminal window run `npm run compile:watch`. This will begin continuously building this repository in order to keep the code being tested against up to date.
* In a new terminal window run `docker-compose up`. This will bring up an instance of redis, postgres and kafka locally to be used in tests.
* Run `npm run test`. The tests we wrote for this repository are very simple, but verify that redis and postgres are running properly and are evidence that you have successfully set up your environment to work on code at dYdX.
