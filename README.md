# 🖼️ test-image-processor

`test-image-processor` is a backend service built with [NestJS](https://nestjs.com/).
Its main purpose is to **generate scaled versions of input images** provided by the user, making it useful for media pipelines that require thumbnails, previews, or multiple resolutions of the same file.

---

## Requirements

- [Node.js](https://nodejs.org/) 18 LTS or higher
- [npm] Installed with Node.js
- [Docker](https://www.docker.com/) for containerized execution and dependencies

---

## Running the application

### 1. Clone the repository

```bash
git clone https://github.com/alubeda/test-image-processor.git
cd test-image-processor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB (using Docker)
Make sure Docker daemon is running on Linux/macOS, or Docker Desktop on Windows.

```bash
npm run db:up
```

### 4. Start the NestJS server

```bash
npm run start:dev
```

The application will run on `http://localhost:3000`.

## Example usage

### Create a new task

**Request**

```bash
POST /tasks
Content-Type: application/json
```

```json
{
  "originalPath": "https://example.com/image1.jpg"
}
```

**Response**

```json
{
    "_id": "61e0a0f8c0b0c1e7a4f0e2e1",
    "status": "pending",
    "price": 25.5,
    "originalPath": "https://example.com/image1.jpg",
    "images": []
}
```

## 📜 Npm Scripts

* `npm run start:dev`: Starts the application in development mode.
* `npm run build`: Compiles the TypeScript code to JavaScript.
* `npm run start:prod`: Starts the compiled application in production mode.

---

## Database Initialization

For convenience, the project includes a script to seed initial data into MongoDB.
This can be useful for local development and testing.

### Run the script

```bash
npm run seed
```

This command will connect to the MongoDB instance and insert predefined documents into the database.

---

## 📝 Code Style

This project uses **Prettier** to maintain a consistent code format. All commits follow the **Conventional Commits** convention.

---

## Design Decisions

* **NestJS**: Chosen for its structure, modularity, and focus on clean architecture and dependency injection. It facilitates the creation of large-scale, maintainable applications.
* **TypeScript**: Provides static typing, which reduces development-time errors and improves code readability.
* **MongoDB**: A document-based database was chosen to offer schema flexibility, which is ideal for a project in its initial phase.
* **Docker for MongoDB**: Instead of installing MongoDB manually on the host machine, a containerized MongoDB instance is used. This approach improves developer experience, simplifies setup across environments, and avoids polluting the host system.
* **Centralized Error Handling**: Instead of using multiple `try...catch` blocks, a global **Exception Filter** was implemented. This ensures that all error responses to clients have a consistent format.
* **`nest-winston`**: This library was used to centralize logs, allowing them to be saved in structured files (JSON) for easy monitoring and analysis.
* **`Conventional Commits`**: A standardized commit style is used to maintain a clean and understandable Git history, which facilitates change tracking and automation.
