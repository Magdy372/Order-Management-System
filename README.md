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

