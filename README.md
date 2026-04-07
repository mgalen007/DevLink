# DevLink

A developer collaboration platform API built with TypeScript, Express, and MongoDB. DevLink enables developers to create projects, apply to join projects, send messages, and manage their professional profiles.

## 🚀 Features

- **User Authentication** - Register and login with JWT tokens
- **Project Management** - Create, list, and manage development projects
- **Project Applications** - Apply to projects and manage application status
- **Messaging System** - Direct messaging between developers
- **User Profiles** - Showcase skills, bio, and GitHub links
- **Security** - Password hashing, helmet headers, CORS, and request logging

## 🛠️ Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js 5.2.1
- **Language:** TypeScript 6.0.2
- **Database:** MongoDB with Mongoose 9.4.1
- **Authentication:** JWT (jsonwebtoken 9.0.3)
- **Security:** Bcryptjs, Helmet, CORS
- **Development:** ts-node-dev for hot-reloading
- **Logging:** Morgan for HTTP request logging

## 📁 Project Structure

```
src/
├── app.ts                 # Express app setup and routing
├── server.ts              # Server bootstrap and database connection
├── middleware/
│   ├── auth.middleware.ts # JWT authentication middleware
│   └── error.middleware.ts # Centralized error handling
├── modules/
│   ├── auth/              # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.routes.ts
│   │   ├── auth.dto.ts
│   │   └── auth.types.ts
│   ├── users/             # User management module
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.routes.ts
│   │   ├── users.model.ts
│   │   ├── users.dto.ts
│   │   └── users.types.ts
│   ├── projects/          # Project management module
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   ├── projects.routes.ts
│   │   ├── projects.model.ts
│   │   ├── projects.dto.ts
│   │   └── projects.types.ts
│   ├── applications/      # Project applications module
│   │   ├── applications.controller.ts
│   │   ├── applications.service.ts
│   │   ├── applications.routes.ts
│   │   ├── applications.model.ts
│   │   ├── applications.dto.ts
│   │   └── applications.types.ts
│   └── messages/          # Messaging module
│       ├── messages.controller.ts
│       ├── messages.service.ts
│       ├── messages.routes.ts
│       ├── messages.model.ts
│       ├── messages.dto.ts
│       └── messages.types.ts
├── config/                # Configuration files
└── structure.md           # Project structure documentation
```

## 🏗️ Architecture

DevLink follows a modular layered architecture where each feature is organized into its own module. Each module contains:

- **Controller** - Handles HTTP requests and responses
- **Service** - Contains business logic
- **Routes** - Defines API endpoints
- **Model** - Mongoose database schemas
- **DTO** - Data transfer objects for request/response validation
- **Types** - TypeScript interfaces and types

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate and get JWT token

### Users

- `GET /api/users` - Get current user profile
- `PATCH /api/users/:id` - Update user profile

### Projects

- `POST /api/projects` - Create a new project
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project details
- `PATCH /api/projects/:id` - Update project (owner only)
- `DELETE /api/projects/:id` - Delete project (owner only)

### Applications

- `POST /api/applications` - Apply to a project
- `GET /api/applications` - Get applications for owned projects
- `PATCH /api/applications/:id` - Update application status (accept/reject)

### Messages

- `POST /api/messages` - Send a message
- `GET /api/messages` - Get conversation messages

### Health Check

- `GET /api/health-check` - API status check

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd devlink
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/devlink
PORT=3000
JWT_SECRET_KEY=your-super-secret-jwt-key
```

4. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application

## 🔒 Authentication

All endpoints except authentication routes require a JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Tokens expire after 3 days.

## 🗄️ Data Models

### User

```typescript
{
  username: string;
  email: string;
  password: string; // hashed
  bio?: string;
  skills?: string[];
  githubLink?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Project

```typescript
{
  title: string;
  description: string;
  techStack: string[];
  owner: ObjectId; // User reference
  createdAt: Date;
  updatedAt: Date;
}
```

### Application

```typescript
{
  applicant: ObjectId; // User reference
  project: ObjectId; // Project reference
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}
```

### Message

```typescript
{
  sender: ObjectId; // User reference
  recipient: ObjectId; // User reference
  content: string;
  createdAt: Date;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
