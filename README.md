# 🚀 AI PromptVault

> A production-ready AI Prompt Management Platform built with the modern JavaScript stack.

AI PromptVault helps developers, creators, and AI enthusiasts organize, version, improve, and reuse AI prompts from a single workspace.

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Access Token & Refresh Token
- HTTP Only Refresh Cookie
- Email Verification
- Forgot Password
- Reset Password
- Session Management
- Device Tracking
- Protected Routes

---

## 📝 Prompt Management

- Create Prompt
- View All Prompts
- Update Prompt
- Delete Prompt
- Favorite Prompt
- Archive Prompt
- Organize into Collections
- Prompt Ownership Validation
- Search, Filter & Pagination
- Prompt Version History

---

## 📁 Collections

- Create Collection
- Update Collection
- Delete Collection
- Move Prompt Between Collections

---

## 🏷 Tags

- Create Tags
- Update Tags
- Delete Tags
- Many-to-Many Prompt Tagging

---

## 🤖 AI Features

Powered by **Google Gemini AI**

- Generate Prompt
- Improve Prompt
- Explain Prompt

---

## 📚 API Documentation

Complete Swagger / OpenAPI documentation available.

Includes:

- Authentication
- Sessions
- Prompt APIs
- Collections
- Tags
- AI APIs
- Request & Response Schemas
- JWT Security

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS v4
- Redux Toolkit
- Shadcn UI
- React Hook Form
- Zod
- Axios
- Sonner

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Neon)
- JWT Authentication
- Zod Validation
- Google Gemini AI
- Brevo Email API
- Swagger (OpenAPI)

---

# 🏗 Project Structure

```text
AI-PromptVault/

├── client/
│
└── server/
```

---

# 📂 Backend Architecture

```text
Routes
    ↓
Controllers
    ↓
Services
    ↓
Repositories
    ↓
Prisma ORM
    ↓
PostgreSQL
```

Utilities

- Async Handler
- Centralized Error Handling
- JWT Helpers
- Token Helpers
- Validation
- Response Helpers

---

# 🗄 Database

Main Models

- User
- Session
- Prompt
- PromptVersion
- Collection
- Tag
- PromptTag
- EmailVerificationToken
- PasswordResetToken

---

# 🔒 Security

- JWT Authentication
- Refresh Token Rotation
- HTTP Only Cookies
- Password Hashing (bcrypt)
- Email Verification
- Protected APIs
- Ownership Validation
- Zod Validation
- Centralized Error Handling

---

# 📖 API Modules

## Authentication

- Register
- Login
- Logout
- Refresh Token
- Verify Email
- Forgot Password
- Reset Password
- Current User
- Active Sessions

---

## Prompt

- Create Prompt
- Get Prompts
- Get Prompt
- Update Prompt
- Delete Prompt
- Favorite Prompt
- Archive Prompt
- Move Collection
- Prompt Version History

---

## Collection

- Create
- Get All
- Update
- Delete

---

## Tag

- Create
- Get All
- Update
- Delete

---

## AI

- Generate Prompt
- Improve Prompt
- Explain Prompt

---

# 📸 Current UI

## ✅ Completed

### Landing Page

- Responsive Navbar
- Hero Section
- Features Section
- Workflow Section
- Pricing
- FAQ
- CTA
- Footer
- Dark / Light Theme

### Authentication

- Login
- Register
- Forgot Password
- Reset Password
- Verify Email

---

# 🚧 In Progress

Frontend Dashboard

- Dashboard Layout
- Sidebar
- Navbar
- Protected Layout
- Prompt Management UI
- Collections UI
- Tags UI
- Profile
- Settings
- Theme Integration
- API Integration

---

# 🚀 Deployment

## Backend

- Render

## Frontend

- Vercel (Pending Final Deployment)

## Database

- Neon PostgreSQL

---

# ⚡ Getting Started

## Clone

```bash
git clone https://github.com/Prashant9155/AI-PromptVault.git
```

```bash
cd AI-PromptVault
```

---

## Backend

```bash
cd server
npm install
```

Create `.env`

```env
DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

BREVO_API_KEY=
EMAIL_FROM=

GEMINI_API_KEY=

CLIENT_URL=

PORT=8000
```

Run

```bash
npm run dev
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# 📌 Roadmap

## ✅ Completed

- Authentication System
- Session Management
- Prompt CRUD APIs
- Collections
- Tags
- AI Integration
- Prompt Version History
- Swagger Documentation
- Landing Page
- Authentication Pages

---

## 🚧 Next

- Dashboard UI
- Frontend API Integration
- Prompt CRUD Screens
- Collection Screens
- Tag Screens
- AI Playground
- Profile
- Settings
- Production Deployment

---

# 👨‍💻 Author

**Prashant Kumar**

Frontend-focused Full Stack Developer

GitHub:
https://github.com/Prashant9155

---

# 📄 License

MIT License