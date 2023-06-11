<h1 align="center"> Deploying the Vue.js application </h1>
This document explains how to deploy the Vue.js application and how to configure the '.env' environment variables file.

# Prerequisites
To deploy this application, you must have the following tools and versions installed on your system:

- Node.js v18.16.0 NPM (comes bundled with Node.js).
- Python 3.8
- Vue 3.3.8

# Environment variables
Environment variables are used to define values that vary between development, test, production, etc. environments. In this project, the following variables are used:

- VUE_APP_HOST: Specifies the hostname where the Vue.js application will be deployed. The default is localhost, which means that the application will run on your local machine. If you need to deploy it on another server, you must change this value to the hostname of that server.
- PORT: This is the port on which the application will run. By default it is 9990, but it can be any port that is not currently in use on your system.
- VUE_APP_ENDPOINT_URL_DB: This is the URL of your database endpoint. This is where the application will look for data. It should be changed to your database URL.

# Environment settings
The environment variables are stored in a file called .env in the root of the project. To change the values, you must follow these steps:

1. Open the '.env' file in your preferred text editor.
2. Change the values of the variables to what you need for your environment.
3. Save and close the '.env' file.
4. Restart your application for the changes to take effect.

# Running the application locally
To run the application locally, follow these steps:

1. Open a terminal in the root of the project.
2. Run 'npm install' to install all the project dependencies.
3. Configure your '.env' file as explained in the previous section.
4. Run 'npm run serve' to start the application.
5. The application should now be running on http://<VUE_APP_HOST>:<PORT>, for example http://localhost:9990.

# Deploy the application to a server
To deploy the application to a server, you will need to create a production version of the application and then transfer the files to your server. Here are the steps:

1. Open a terminal in the root of the project.
2. Run 'npm install' to install all the project dependencies.
3. Configure your '.env' file as explained in the previous section.
4. Run 'npm run build' to create a production version of the application. This will create a dist folder in your project with all the necessary files.
5. Copy the 'dist' folder to your server. The exact location and method of doing this will depend on your server.
6. On your server, you will need to configure your web server to serve the files in the 'dist' folder. This will also depend on your web server.
