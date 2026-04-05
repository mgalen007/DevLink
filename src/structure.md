# DevLink API — Architecture Overview

## Project Structure

* **src/**

  * **modules/**

    * **auth/**

      * controller
      * service
      * routes
      * types
    * **users/**

      * controller
      * service
      * routes
      * types
    * **projects/**

      * controller
      * service
      * routes
      * types
    * **applications/**

      * controller
      * service
      * routes
    * **messages/**

      * controller
      * service
      * routes
  * **middlewares/**

    * authentication middleware
    * validation middleware
    * error handling middleware
  * **utils/**

    * JWT utilities
    * password hashing utilities
  * **config/**

    * database configuration
    * environment configuration
  * application entry (app)
  * server bootstrap (server)

---

## Data Models

### User

* Unique identifier
* Username
* Email
* Password (hashed)
* Bio (optional)
* Skills (list)
* GitHub link (optional)
* Created timestamp

---

### Project

* Unique identifier
* Title
* Description
* Tech stack (list)
* Owner (user reference)
* Created timestamp

---

### Application

* Unique identifier
* Applicant (user reference)
* Project reference
* Status (pending / accepted / rejected)
* Created timestamp

---

### Message

* Unique identifier
* Sender (user reference)
* Receiver (user reference)
* Content
* Created timestamp

---

## Auth Endpoints

* Register a new user
* Login user
* Get current authenticated user

---

## User Endpoints

* Get a user profile by ID
* Update current user profile

---

## Project Endpoints

* Create a project
* Get all projects
* Get a single project
* Delete a project (owner only)

---

## Application Endpoints

* Apply to a project
* Get all applications for a project (owner only)
* Update application status (accept/reject)

---

## Message Endpoints

* Send a message
* Get conversation between two users

---

## Middleware Overview

* **Authentication**

  * Verifies user identity via token
  * Protects private routes

* **Validation**

  * Ensures incoming data matches expected structure

* **Error Handling**

  * Centralizes error responses
  * Prevents scattered error logic

---

## Request Flow (High Level)

Client → Route → Middleware → Controller → Service → Database → Response

---

## Architectural Notes

* Controllers handle request/response logic only
* Services contain all business logic
* Middleware handles reusable cross-cutting concerns
* Modules isolate features for scalability
* Structure is designed to scale into frameworks like NestJS

---
