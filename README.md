# PHP REST API and Vite Frontend with Docker Compose

This project demonstrates a simple PHP-based REST API for product management with a MySQL database, and a frontend built using Vite. The project uses Docker Compose to manage the entire application stack, including the backend, frontend, and database.

## Project Structure

├── back/ # Backend PHP API files

│ ├── .env # Environment variables

│ ├── Product.php # PHP model for Product

│ ├── db.php # Database connection

│ ├── index.php # Main API entry point

│ ├── ProductController.php

│ ├── ProductHelper.php

├── front/ # Frontend built with Vite

│ ├── index.html

│ ├── vite.config.js

├── Dockerfile.front

├── Dockerfile.back

├── init.sql # SQL file for initializing the database schema

├── docker-compose.yml # Docker Compose configuration file

└── README.md # This file


## Prerequisites

Make sure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (if you want to run the frontend outside of Docker)
  
## Running the Application on Docker

1. **Clone the Repository**

   Clone this repository to your local machine.

   ```bash
   git clone https://github.com/mmedela/deCampoACampo.git
   cd deCampoACampo

2. Set Up Environment Variables

   Modify the .env file to set the DOLLAR_EXCHANGE_RATE and MySQL-related environment variables such as database name, user, and password.

   ```bash
   DOLLAR_EXCHANGE_RATE=1200
   MYSQL_DATABASE=mysql
   MYSQL_USER=products_db
   MYSQL_PASSWORD=root
   MYSQL_ROOT_PASSWORD=admin

4. **Run Docker Compose**
   
   Use Docker Compose to build and start all the services.
   
   This will build and start the following containers:
   - backend: PHP REST API server
   - frontend: Vite-based frontend
   - db: MySQL database server
       
   ```bash
     docker-compose up --build
   
5. **Access the Application**

  - The backend API will be available at http://localhost:8000.
  
  - The frontend will be available at http://localhost:5173.

## Running the Application locally

1. Perform steps 1 and 2 of the previous section.

2. Install Node.js Dependencies

   Navigate to the Front/ directory and install the required dependencies using npm or yarn:
   ```bash
      cd Front/
      npm install

4. Modify Vite Configuration
   Update the vite.config.js file in the front/ directory to point to the local backend instead of the Docker container. Change the target value in the proxy section to point to your backend:
    ```bash
    export default defineConfig({
     plugins: [react()],
     server: {
       proxy: {
         '/api': {
           target: <YourBackendRout>,  // Change to 'http://localhost:8000' if useing default settings
           changeOrigin: true,
           rewrite: (path) => path.replace(/^\/index.php/, '/index.php')
         }
       }
     }
   })
5. Run the Backend

   Navigate to the Front/ directory and run the aplication
    ```bash
      cd Back/
      php -S <YourBackendRout> # localhost:8000, for example
7. Run the Frontend
   ```
   npm run dev
   ```
   The frontend will now be accessible at http://localhost:5173 and will proxy API requests to the backend running on ```<YourBackendRout>```.
