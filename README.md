<p align='center'><img src='https://dydx.exchange/logo.svg' width='256' /></p>

The goal of this repository is to verify that your development environment is set up to start working on code at dYdX. Successfully running the tests in this repo confirms that your environment is close to or completely set up to work with dYdX repositories.

## Git
Clone the repository with one of the following
```
git clone git@github.com:dydxprotocol/systemCheck.git
git clone https://github.com/dydxprotocol/systemCheck.git
```

Create a new branch locally

`git checkout -b <branch_name>`

Stage files to be committed

`git add <file_names>`

Add a commit with a message

`git commit -m "<message>"`

Push to the remote branch

`git push origin <branch_name>`

Create the pull request on github.com from your branch to master

[Here](http://guides.beanstalkapp.com/version-control/common-git-commands.html) is a list of helpful git commands.

## Editor

Pick a text editor you are comfortable with. Most editors should have javascript support. Many engineers at dYdX use [VSCode](https://code.visualstudio.com) or [Atom](https://atom.io).

## Node

Many dYdX services are written in NodeJs with Typescript. When installing node a version of npm will come with it. To get the latest version of npm run:

```npm install -g npm@latest```

To install all packages needed for the repo, run:

```npm i```

Set your node version to 12. NVM is a good tool for managing your node version. When installing nvm you will need to use an install script. To change to node version 12 run:

```nvm use 12```

## Docker

We use docker locally to support running tests against a realistic environment, with (e.g.) postgres and redis running in dockerized containers. You’ll need to [download](https://www.docker.com/get-started) and start docker locally, as well as install [docker-compose](https://docs.docker.com/compose/install).

## Running Tests

* Run all commands from the root directory of the repository.
* In one terminal run `npm run compile:watch`. This will allow for continual building as you make changes to files.
* In a second terminal run `docker-compose up`. This will bring up an instance of redis, postgres and kafka locally to be used in tests.
* In a third terminal run your tests with `npm run test`. You can add a test filename as an optional argument if you don’t want to run the whole test suite. This command pattern matches for all files with .test.ts so you don’t need to include the entire path, for example `npm test -- __tests__/basicFlowTests`.
