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

## Running the Application

1. **Clone the Repository**

   Clone this repository to your local machine.

   ```bash
   git clone https://github.com/mmedela/deCampoACampo.git
   cd deCampoACampo

2. **Run Docker Compose**
   
   Use Docker Compose to build and start all the services.
   
   This will build and start the following containers:
   - backend: PHP REST API server
   - frontend: Vite-based frontend
   - db: MySQL database server
       
   ```bash
     docker-compose up --build
   
4. **Access the Application**

  - The backend API will be available at http://localhost:8000.
  
  - The frontend will be available at http://localhost:5173.



