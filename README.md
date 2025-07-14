# User Registration Project

This is a user registration project developed with **React** for the frontend, **Node.js** with **Express** for the backend, **MongoDB** as the database, and **Prisma** as the ORM.

---

## 🚀 Technologies Used

* **Frontend:**
    * **React:** A JavaScript library for building user interfaces.
    * **JavaScript:** The programming language.
* **Backend:**
    * **Node.js:** A JavaScript runtime environment.
    * **Express:** A web framework for Node.js.
    * **Prisma:** A modern ORM (Object-Relational Mapper) for Node.js and TypeScript, simplifying database interactions.
    * **MongoDB:** A NoSQL database, known for its flexibility and scalability.

---

## ✨ Features

* Register new users.
* List existing users.
* Edit user information.
* Delete users.

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

* **Node.js:** [https://nodejs.org/](https://nodejs.org/)
* **npm** (Node.js package manager, usually comes with Node.js)
* **MongoDB:** [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) (install and ensure the MongoDB server is running)
* **Git:** [https://git-scm.com/](https://git-scm.com/)

---

## ⬇️ Installation and Execution

Follow the steps below to clone the repository, install dependencies, and run the project.

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone [https://github.com/ThiagoBoges/User-Registration-Project.git](https://github.com/ThiagoBoges/User-Registration-Project.git)
cd User-Registration-Project # Navigate to the root project folder
````
### 2. Configure the Backend
Navigate to the backend folder and install the dependencies:

```bash
cd backend # Or the name of your backend folder, e.g., 'server' or 'api'
npm install
````

### 2.1 Configure Prisma and the Database
Create a .env file in the root of your backend folder with your MongoDB connection string. For example:

```bash
DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<YOUR_DATABASE_NAME>?retryWrites=true&w=majority"
````

Important:

Replace <USERNAME>, <PASSWORD>, <CLUSTER>, and <YOUR_DATABASE_NAME> with your MongoDB Atlas credentials and database name.

If you're using MongoDB locally, your DATABASE_URL might look something like mongodb://localhost:27017/your_database_name.

After configuring the DATABASE_URL, generate the Prisma client and push your schema to the database (or create collections for MongoDB):
```bash
npx prisma generate
npx prisma db push
````

### 2.2 Run the Backend
Start the backend server:
```bash
npm start
````
The backend will be running at http://localhost:3001 (or on the port you configured).

### 3. Configure and Run the Frontend
Open a new terminal, navigate to the frontend folder, and install the dependencies:
```bash
cd ../frontend # Or the name of your frontend folder, e.g., 'client'
npm install
````

### 3.1 Run the Frontend
Start the React application:
```bash
npm start
````
The frontend will be running at http://localhost:3000 (or on the default React port).

---
