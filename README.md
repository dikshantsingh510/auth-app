# 🚀 Role-Based Access Control (RBAC) Authentication App

## 📜 Table of Contents

- [🚀 Role-Based Access Control (RBAC) Authentication App](#-role-based-access-control-rbac-authentication-app)
  - [📜 Table of Contents](#-table-of-contents)
  - [🔹 Introduction](#-introduction)
  - [📚 What I Learned](#-what-i-learned)
  - [⚡ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📦 Packages Used](#-packages-used)
  - [🔑 How It Works](#-how-it-works)
  - [🏗️ Project structure](#️-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [1️⃣ Clone the repository](#1️⃣-clone-the-repository)
    - [2️⃣ Install dependencies](#2️⃣-install-dependencies)
    - [3️⃣ Set up environment variables](#3️⃣-set-up-environment-variables)
    - [4️⃣ Run the development server](#4️⃣-run-the-development-server)
  - [📌 Future Improvements](#-future-improvements)
    - [🎉 Thanks for checking out my project! Let me know if you have any feedback. 🚀](#-thanks-for-checking-out-my-project-let-me-know-if-you-have-any-feedback-)

---

## 🔹 Introduction

This is a **Role-Based Access Control (RBAC) authentication app** built using **Next.js 15, React 19, TypeScript, Prisma and MongoDB**. It features **secure authentication**, **server actions instead of traditional APIs**, and **error handling with useActionState**.

---
## 📚 What I Learned

📌 **Implementing authentication using NextAuth.js with Server Actions**\
📌 **Using App Router with Next.js 15 for modern authentication**\
📌 **Handling secure password hashing with bcryptjs**\
📌 **Updating UI dynamically based on session state**\
📌 **Using useActionState for form submission & error handling**\
📌 **Role-Based Access Control (RBAC) for protected routes**\
📌 **Integrating ShadCN UI for enhanced user experience**

---

## ⚡ Features

✅ **User Authentication (Sign Up & Login)** 🔐\
✅ **JWT-based Session Management** 🛡️\
✅ **Secure Password Hashing with bcryptjs** 🔑\
✅ **Role-Based Access Control (RBAC)** 🎭\
✅ **Server Actions for Authentication (Instead of API Routes)** ⚡\
✅ **useActionState for Handling Form State & Errors** 🚀\
✅ **ShadCN UI Components for Beautiful UI** 🎨\
✅ **Dynamic UI Updates without Page Refresh** 🔄\
✅ **Error Handling & Toast Notifications** 🔥\
✅ **Route Protection** 🔒


---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, ShadCN UI
- **Backend:** Next.js Server Actions
- **Database:** MongoDB (Prisma)
- **Authentication:** NextAuth.js (Custom Credentials Provider)

---

## 📦 Packages Used

📌 `next-auth` - Authentication provider 🔑\
📌 `prisma` - MongoDB object modeling 🗄️\
📌 `bcryptjs` - Password hashing 🔒\
📌 `sonner` - Toast notifications 🎉\
📌 `tailwindcss` - Styling 💅\
📌 `shadcn/ui` - Pre-styled UI components 🎨

---

## 🔑 How It Works

**1️⃣ User Registration** – Users sign up with name, email, and password. The password is **hashed before saving** in the database.\
**2️⃣ User Login** – NextAuth.js authenticates users with **custom credentials**, verifies hashed passwords, and generates a **JWT-based session**.\
**3️⃣ Role-Based Access Control (RBAC)** – Admin and user roles are assigned. Admins can access protected routes, while users have restricted access.\
**4️⃣ Session Management** – User sessions persist using JWT tokens. UI updates dynamically based on session status.\
**5️⃣ Logout** – Users can log out, and their session is invalidated.\
**6️⃣ Admin Panel (Protected Route)** – Only authenticated admins can access the admin dashboard.

---
## 🏗️ Project structure

 A simple project structure of my Task Manager project is as follows: 👇👇👇



```bash
root
├─ actions
│  └─ user.ts
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.ts
│  ├─ dashboard
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  └─ register
│     └─ page.tsx
├─ auth.config.ts
├─ auth.ts
├─ components
│  ├─ hero.tsx
│  ├─ Login-form.tsx
│  ├─ mode-toggle.tsx
│  ├─ nav-header.tsx
│  ├─ not-allowed.tsx
│  ├─ signout-btn.tsx
│  ├─ Signup-form.tsx
│  ├─ theme-provider.tsx
│  └─ ui
│     ├─ button.tsx
│     ├─ checkbox.tsx
│     ├─ dropdown-menu.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ sonner.tsx
│     └─ table.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib
│  ├─ getSession.ts
│  └─ utils.ts
├─ middleware.ts
├─ next-auth.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ prisma.ts
│  └─ schema.prisma
├─ public
├─ README.md
├─ tsconfig.json
└─ types
   └─ types.ts

```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/dikshantsingh510/auth-app.git
cd auth-app
```

### 2️⃣ Install dependencies

```bash
npm install  # or yarn install
```

### 3️⃣ Set up environment variables

Create a `.env` file and add your MongoDB URI and NextAuth secret:

```env
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
```

### 4️⃣ Run the development server

```bash
npm run dev  # or yarn dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

---


## 📌 Future Improvements

🔹 Implement OAuth login (Google, GitHub, etc.)\
🔹 Two-Factor Authentication (2FA)\
🔹 Email verification & password reset feature\
🔹 UI/UX enhancements 🎨

---

### 🎉 Thanks for checking out my project! Let me know if you have any feedback. 🚀
