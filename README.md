# Node.js Express Starter App

A reusable starter app built with Node.js, Express, MongoDB, PostgreSQL, Docker, Prisma, and other technologies. It includes authentication, user management, and basic backend functionalities, along with Swagger documentation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Database Configuration](#database-configuration)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Node.js**: Backend runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework.
- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **PostgreSQL**: Relational database for complex querying.
- **Docker**: Containerization for consistent development and deployment.
- **Prisma**: Modern ORM for type-safe database access.
- **Authentication**: JWT and Google OAuth authentication.
- **Swagger**: API documentation and testing.
- **Environment Variables**: Configuration using `.env` files.
- **User Management**: CRUD operations for user entities.
- **Modular Structure**: Clean and scalable project structure.

## Prerequisites

- **Node.js** (version 16.x or later)
- **npm** (version 7.x or later)
- **Docker** (version 20.x or later)
- **Docker Compose** (version 1.27.x or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-express-starter.git
   cd node-express-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file and add your configurations.

4. Initialize Prisma:
   ```bash
   npx prisma generate
   ```

## Usage

### Local Development

1. Start the application using Docker Compose:
   ```bash
   docker-compose up
   ```

2. The server will be available at `http://localhost:3000`.

3. Access Swagger documentation at `http://localhost:3000/api-docs`.

### Common Commands

- Start the application:
  ```bash
  npm start
  ```

- Run in development mode:
  ```bash
  npm run dev
  ```

- Lint the code:
  ```bash
  npm run lint
  ```

- Run tests:
  ```bash
  npm test
  ```

## API Documentation

The API documentation is available via Swagger UI at `http://localhost:3000/api-docs`. It includes details on available endpoints, request parameters, and responses.

### Example Endpoints

- **GET /api/user**: Retrieve a list of users.
- **POST /api/user**: Create a new user.
- **PUT /api/user/:id**: Update user information.
- **DELETE /api/user/:id**: Delete a user.

## Project Structure

```
node-express-starter
├── prisma
│   ├── migrations/
│   └── schema.prisma
├── routes
│   └── user.js
├── src
│   ├── config
│   │   └── config.js
│   ├── controllers
│   │   └── userController.js
│   ├── middlewares
│   │   └── authMiddleware.js
│   ├── models
│   │   └── userModel.js
│   ├── services
│   │   └── authService.js
│   ├── index.js
│   ├── swagger.js
│   └── app.js
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## Environment Variables

Set up the environment variables in the `.env` file. Here are the required variables:

```env
# Server configuration
PORT=3000

# MongoDB configuration
MONGO_URI=mongodb://localhost:27017/app_db


# JWT Secret
JWT_SECRET=your_jwt_secret



## Database Configuration

### MongoDB

- Ensure MongoDB is running locally or in Docker.
- Set `MONGO_URI` in the `.env` file to your MongoDB connection string.


## Running Tests

Tests are written using a testing framework like Jest. To run the tests, execute:

```bash
npm test
```

## Deployment

### Docker

1. Build the Docker image:
   ```bash
   docker build -t node-express-starter .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 node-express-starter
   ```

### Cloud Providers

Deploy the app to your preferred cloud provider using their respective guides. Ensure to configure environment variables and database connections appropriately.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
