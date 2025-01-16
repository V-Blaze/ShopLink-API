# ShopLink API Setup and Run Instructions

Follow the steps below to set up and run the ShopLink API project.

## Prerequisites

Before you start, make sure you have the following installed on your machine:
- **Node.js** (version 16.x or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) or **Yarn** - npm is installed with Node.js, but you can also install Yarn [here](https://yarnpkg.com/).
- **Knex.js** - Knex is a SQL query builder for Node.js. It will be installed as part of the project dependencies.
- **TypeScript** - TypeScript will be installed globally or as part of the project dependencies.

## Setup

### 1. Clone the GitHub Repository

```bash
git clone https://github.com/your-username/shoplink-api.git
cd shoplink-api
```

### 2. Install Dependencies
#### Install all required dependencies for the project using npm or Yarn.
```bash
npm install
```
or
```bash
yarn install
```
This will install the necessary packages such as Express, Knex, TypeScript, and other dependencies.

### 3. Configure Environment Variables
Create a `.env` file in the root directory of the project by copying the `.env.example` file:
```bash
cp .env.example .env
```

### 4. Run Database Migrations
The project uses Knex.js for database migrations. Run the following command to create the necessary tables and relationships:
```bash
npx knex migrate:latest
```
This will create the `shops`, `products`, and `shop_products tables` in the shoplink_api database.

### 5. Seed the Database
If you want to seed the database with sample data for shops and products, run:
```bash
npx knex seed:run
```
This will populate the database with initial data.

### 6. Start the Development Server
Run the following command to start the development server:
```bash
npm run dev
```
or

```bash
yarn dev
```
This will start the Express server, and the API will be accessible at `http://localhost:3000`.

### 7. Test the API
You can now test the API endpoints using tools like Postman or cURL.

Here are the available endpoints:

- **GET** `/api/products-and-shops` - Fetch all product names and associated shop names.
- **POST** `/api/store-product` - Store a new product in a specific shop.

Example request for POST /api/store-product:

```json
{
  "name": "New Product",
  "price": 99.99,
  "shopId": 1
}
```

## Troubleshooting

If you encounter migration issues, try running `npx knex migrate:rollback` to revert migrations and then run `npx knex migrate:latest` again.