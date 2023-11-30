# DevOps - Assignment 3

## Step 1: Project Setup:
* Git hub repository was created
* Command "npx create-next-app multicontainer" used to create a next.js app
* Command "npm i" executed to install all the dependencies
* Execute the commands "npm i -D prisma",  "npm install @prisma/client", "npm i tsx" and "npx prisma init" to install prisma, prisma client and tsx which is used to run the seed file which contains the initial values that the database is populated with. Then prisma is initialized using the init command which creates a prisma folder containing the schema file
* A table was then added in the schema file and the seed file was created to populate the database table with some initial values
* The .env file was modified to add the database url containing the database username, password and name
* A server was created in pgAdmin with the same database credentials as that specified in the .env file
* A docker file was then created for building the image of the web application, specifying the ports on which the application would be accessible and the commands that need to be executed to run the application
* A docker-compose.yml file was created to be able to use two containers in the application, one for the web application and the other for the database
* The main page of the project under the src directory was modified to display "Hello World"
* Another page was created under the src/category directory to display the data by getting it from the table in the database
* Another folder was created in the src directory with the name api. This folder contains a folder called "category" which contains a route.ts file, this file is the api endpoint and it uses prisma to get all the data from the table
* The commands "npm install --save-dev jest @testing-library/react @testing-library/jest-dom" and "npm i jest-environment-jsdom" were executed to install all the libraries used to write unit tests
* The tests folder was created in the root directory and a test suite was written to check if the main page under the src directory contains the message "Hello World"
* To test the application locally, a dummy docker container was created with the same name as that specified in the .env file and the pgAdmin server was connected to this container. The commands "npx prisma db push" and "npx prisma db seed" were executed to push the schema and values in the database. The command "npm run dev" was then executed to test the application locally
* The dummy container was deleted and the "docker compose up" command was executed to test the application in the docker container. The container containing the database was given the same name as that of the pgAdmin server which was specified in the .env file and the server was connected to this container. The commands "npx prisma db push" and "npx prisma db seed" were executed to push the schema and values in the database

## Step 2: GitHub Actions
* The entire code was pushed into the repository
* A new repository was created in docker hub with the name that would be used in the workflow to push the image in this repository
* The docker credentials were added as secrets in the GitHub repository to allow the image to be pushed from GitHub to docker repository
* In GitHub Actions", the "Publish Docker Container" was configured to create a workflow
* A build job was added in the workflow which clones the main branch of the repository in the runner and checks the package manager being used in the project i.e., npm or yarn. Depending on the package manager being used, it sets up node for the Next.js app and then runs then installs all the dependencies and run the "npm run build" command to build the project
![Image Alt text](/public/images/Build.JPG "Build Job")

* A test job was added in the workflow which clones the the main branch of the repository in the runner and installes node, after which it installs all the dependencies. It then runs the command "npm t", which is used to run the test suites
![Image Alt text](/public/images/Test.JPG "Test Job")

* The registery name and image name were stored as environment variables in the workflow
* The job obtained from "Publish Docker Container" was modified to build and push the image to the repository created in dockher hub. The original verison pushes it to Github packages. The modification was made in the register name, image name and the log in credentials for docker
![Image Alt text](/public/images/Deploy.JPG "Deploy Job")
![Image Alt text](/public/images/DockerHub.JPG "DockerHub - Repository")