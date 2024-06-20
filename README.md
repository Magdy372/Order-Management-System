# Order-Management-System

## Overview

This project implements an Order Management System for an e-commerce mobile application using NestJS, Prisma, and PostgreSQL. It provides various functionalities such as managing products, creating orders, updating order status, and managing shopping carts through a RESTful API interface.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)


## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/order-management-system.git
   cd order-management-system

2. **Install dependencies:**:
    ```bash
    npm install


## Database Setup

1. **Ensure PostgreSQL is running.**
2. **Create a new PostgreSQL database**:
    ```sql
    CREATE DATABASE order_management_system;

3. **Configure the .env file with your PostgreSQL connection string**:
    ```bash
    DATABASE_URL="postgresql://user:password@localhost:5432/order_management_system"

4. **Run Prisma migrations to set up the database schema**:
    ```bash
    npx prisma migrate dev --name init

5. **Generate Prisma client**:
    ```bash
    npx prisma generate



## Running the Application
1. **Start the NestJS application**:
    ```bash
    npm run start:dev

    The application will be running at http://localhost:3000.


## API Documentation

The API endpoints are documented using Swagger. You can access the Swagger UI to explore and interact with the APIs.

1. **Swagger UI Endpoint**:

   Open your browser and navigate to `http://localhost:3000/api`.

   Swagger UI provides an interactive interface to view available endpoints, execute requests, and view responses.

## Project Structure

The project follows a structured layout for better organization and separation of concerns:

- `src/`
  - `controllers/`: API route handlers/controllers.
  - `dtos/`: Data Transfer Objects used for API input validation.
  - `entities/`: Prisma schema models representing database entities.
  - `services/`: Business logic services that interact with the database.
  - `prisma/`: Prisma client configuration and migrations.

## Contributing

Contributions are welcome! You can contribute to the project by opening issues for bugs or feature requests, or by submitting pull requests with improvements.

To contribute:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Push your changes to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

