# 🖼️ Image Storage Project

A full-stack web application that allows users to upload images with captions, store them in the cloud via **ImageKit**, and browse them in a live feed. Built with a **React + Vite** frontend and an **Express + MongoDB** backend.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Usage](#usage)

---

## ✨ Features

- 📤 **Upload Images** — Select and upload any image with an optional caption
- ☁️ **Cloud Storage** — Images are stored on [ImageKit](https://imagekit.io/) CDN
- 🗃️ **Persistent Data** — Post metadata (image URL + caption) is saved to MongoDB
- 📰 **Live Feed** — Browse all uploaded posts in a responsive feed view
- 🔀 **Client-side Routing** — Seamless navigation between pages with React Router

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI framework |
| Vite | ^8.0.4 | Build tool & dev server |
| React Router DOM | ^7.14.1 | Client-side routing |
| Axios | ^1.15.0 | HTTP requests |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Express | ^5.2.1 | Web server framework |
| Mongoose | ^9.4.1 | MongoDB ODM |
| Multer | ^2.1.1 | Multipart file upload handling |
| ImageKit Node.js SDK | ^7.5.0 | Cloud image storage |
| CORS | ^2.8.6 | Cross-origin request handling |
| dotenv | ^17.4.2 | Environment variable management |

---

## 📁 Project Structure

```
Image-Storage-Project/
├── Backend/
│   ├── server.js               # Entry point — starts the server
│   ├── package.json
│   ├── .env                    # Environment variables (not committed)
│   └── src/
│       ├── app.js              # Express app & route definitions
│       ├── db/
│       │   └── db.js           # MongoDB connection
│       ├── models/
│       │   └── post.model.js   # Mongoose Post schema
│       └── services/
│           └── storage.service.js  # ImageKit upload logic
│
└── Frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx            # React entry point
        ├── App.jsx             # Root component & router setup
        ├── index.css           # Global styles
        └── pages/
            ├── CreatePost.jsx  # Upload image + caption form
            └── Feed.jsx        # Displays all posts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account and cluster
- An [ImageKit](https://imagekit.io/) account (free tier works)

---

### Backend Setup

1. **Navigate to the Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `Backend/` directory (see [Environment Variables](#environment-variables)):
   ```bash
   cp .env.example .env   # or create it manually
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

   The API will be running at `http://localhost:3000`.

---

### Frontend Setup

1. **Navigate to the Frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (default Vite port).

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend/` directory with the following keys:

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

> ⚠️ **Never commit your `.env` file to version control.** Make sure it is listed in `.gitignore`.

You can find your ImageKit credentials in the [ImageKit Dashboard](https://imagekit.io/dashboard/developer/api-keys).

---

## 📡 API Reference

### `GET /`
Health check endpoint.

**Response:**
```json
{ "message": "Welcome to my image storage api" }
```

---

### `POST /create-post`
Upload a new image post.

**Content-Type:** `multipart/form-data`

| Field | Type | Description |
|---|---|---|
| `image` | `File` | The image file to upload |
| `caption` | `string` | A text caption for the post |

**Success Response `201`:**
```json
{
  "message": "Post created Successfully!",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "Your caption here"
  }
}
```

---

### `GET /posts`
Fetch all posts from the database.

**Success Response `200`:**
```json
{
  "message": "Posts fetched successfully!",
  "posts": [
    {
      "_id": "...",
      "image": "https://ik.imagekit.io/...",
      "caption": "..."
    }
  ]
}
```

---

## 💡 Usage

1. Open the app in your browser at `http://localhost:5173`
2. Navigate to `/create-post` to upload a new image with a caption
3. After submitting, you'll be redirected to `/feed`
4. The feed displays all previously uploaded posts pulled from the database

---

## 📄 License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).
