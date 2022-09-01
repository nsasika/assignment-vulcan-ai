# Vulcan AI Assignment

> project with NodeJS + Express + Sequelize ORM + Sqlite + JavaScript:

## Table of Contents

- [Introduction]
- [Up and Running]
- [REST API]

##

## Introduction

Our app directory consists on the following folders

| Directory    | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| /config      | Contains all of your environments, database configuration and middleware configuations. |
| /controller  | Contains all of our endpoints defination.                                               |
| /consts      | Contains constants                                                                      |
| /service     | Contains all of our services defination.                                                |
| /routes      | Our endpoints listing.                                                                  |
| /models      | Our models listing.                                                                     |
| /validations | Our endpoint validations                                                                |
| /utils       | Our util definitions                                                                    |
| /helpers     | Our helper definitions                                                                  |

## Up and Running

### Local Setup

Make sure you have [Node.js][3] and the [Sqlite] installed.
Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/nsasika/assignment-vulcan-ai 
cd assignment-vulcan-ai
npm install # To install NodeJS dependencies.
```

## Environment Variable setup

Export environment variables through terninals

```
* export NODE_ENV=development
* export PORT=8000
* export SECRET_KEY=example_secret
```

Or copy the values to a `.env` file at the root of your environment

If you are just running this locally, using the basic development server, then just update the development config.

## Run the project

```bash
npm start
```

## REST API Documentation

http://localhost:8000/api-documentation/#/

baseUrl - http://localhost:8000

```bash
Create an advertisement - baseUrl/advertisements ( title - title of add, description - description of add, email - user email, contents - [array of image urls(string)])
- POST
- body : {email, title, description, contents}
```

```bash
Get an advertisement  - baseUrl/advertisements/:id (id - advertisement id)
```
```bash
Update a content (image) of an advertisement - baseUrl/id  (id - advertisement id, contentId - content id, url - image ur)
- PATCH 
- body : {contentId, url}
```
```bash
Delete a content (image) of an advertisement - baseUrl/id  (id - advertisement id, urls - image url array)
- PATCH 
- body : {urls}