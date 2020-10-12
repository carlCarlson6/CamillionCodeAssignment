# CAMILLION CODE ASSIGMENT

In this repository you will find solution for the code assigment by [Camillion](https://www.camillion.app/). The assigment consist on coding a news API that will store and retrieve news articles focusing on quality and good practices, more details about the requirements on *Backend Code Test.pdf*.

All code is written with [typescript](https://www.typescriptlang.org/), the [nodejs](https://nodejs.org/es/) version used was 12.18.0 and [npm](https://www.npmjs.com/) version 6.14.4. Also I have tried to follow the SOLID principles and a some-like clean architecture.

The source code of the project can be found on the NewsBackend subfolder next to the test suits.

To download and run the code open a terminal window and execute the following commands:

    git clone https://github.com/carlCarlson6/CamillionCodeAssignment.git
    cd ./CamillionCodeAssigment/NewsBackend
    npm run build
    npm run start

If you just want to run the code on development mode open two terminal windows and in one of them run:

    npm run dev:build

this runs the typescript transpiler on watch mode, it will look for changes on the source folder and transpile each time, and on the other window run:

    npm run dev:start

this command runs nodemon against ./build/source/index.js and when changes ocurr it re-runs the script.

When you run the code on "production" or "development" mode it will interact with a PostgresDB so it is necessary to add a *dev.env* file on the root of the NewsBackend folder with the following environment variables:

    postgres_host = <database_server_host>
    postgres_database = <database_name>
    postgres_user = <user_name>
    postgres_port =  <host_port>
    postgres_password = <password>

For executing the test suit just run:

    npm run test

apart of running and showing the tests results it will generate a *coverage* folder with more in depth analysis of the tests. Although the test runs against the typescript files directly I recomend to run the build command before testing.

The versions of the libraries used below can be found on the *package.json* file.

## NEWS BACKEND

The news API exposes the endpoint */api/news* and allows the http methods *GET* and *POST* to respectively retrieve all the news and add a new one news.

For the POST method is needed to send the data on the body implementing the following interface:

    {
        "title":  string,
        "description":  string,
        "text":  string,
        "author":  string
    }

All fields are mandatory.

The backend core is composed by four main modules:

- Core
- Api
- Services
- Repository

That will be decribed in detail in the following section.

Below you can observe depency graph between the modules.

![components_diagram](img/components_diagram.jpg)

### CORE

On this module are coded the interfaces of the application that will define the functionality of the services and repositories (IRepository, IAddNewsService and GetAllNewsService interfaces ). The INewsEntity interface acts as a data transfer object to flow the data through the system.

![CORE_diagram](img/CORE_diagram.jpg)

The objective of this module is to act as some kind of domain layer and to achive decoupling of the code from the infrastructe.

### API

![API_diagram](img/API_diagram.jpg)

#### Dependency Injection

### SERVICES

On these module we find the implementations of the service interfaces, their mission is to execute the logic or use cases of the application

![SERVICES_diagram](img/SERVICES_driagram.jpg)

Both services depends on the PostgreNewsRepository and are executed on the NewsController after parsing the request.

### REPOSITORY

Here we encounter the implementations of the IRepository interface that will execute the CRUD operations on the Postgres database (PostgreNewsRepository) or any other kind of persistence system (InMemoryNewsRepository).

These repositories are used by the services to complete their functionality (retrieve and add data).

The InMemoryNewRepository was only used during early development time, now does not accomplish any functionality.

![REPOSITORY_diagram](img/REPOSITORY_diagram.jpg)

On the PostgreRepository submodule we also find NewsEntityModel class that definds ORM model and the TypeOrmDbConnector, who follows a the singleton pattern, that executes the connection to de database.

The ORM engine used was [TypeOrm](https://typeorm.io/#/).

## TESTING

Next to the source code folder on NewsBackend we find the test folder containing the test suits, these are:

- AddNewsService.test.ts - unitary tests for the AddNewsService class.
- GetAllNewsService.test.ts - unitary tests for the GetAllNewsService class.
- NewsController.test.ts - test that the controller returns the correct status codes on the response, since the controllers response directly with the data returned from the services the response body data is not tested.

The PosgreNewsRepository only interacts with the TypeOrm code I decided not to write tests for this class since I will have to mock the library code.
For testing library I have used [jest](https://jestjs.io/) and [ts-jest](https://github.com/kulshekhar/ts-jest) to process the jest tests written with typescript.

On the mocks subfolder you can find the mocks for the services, repository and request and response objects for reutilization on the tests. For mocking I have used the [moq.ts](https://github.com/dvabuzyarov/moq.ts) library.

## CONTINUOS INTEGRATION

This projects uses continuos integration with github actions to automate the build and tests, on the .github/workflows folder you can find the main.yml file that will orchestate this jobs.

When a new pull request is created to the master branch the RUN - BUILD & TEST action will be executed (actions tab on github) installing the npm modules, creating the build and running the tests.
