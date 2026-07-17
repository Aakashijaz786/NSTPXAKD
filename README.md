# NSTP × AKD Group — Defense Tech Incubation

A production-quality MERN stack landing page + application portal for the NSTP × AKD Group Defense Technology Incubation Program.

## Stack

- **Frontend:** React (Vite), Tailwind CSS v3, Framer Motion, React Hook Form + Zod, React Router DOM, Axios, Lucide React, react-hot-toast, canvas-confetti
- **Backend:** Express.js, MongoDB (Mongoose), express-rate-limit, express-validator

## Project Structure

```
nstp-akd-incubation/
├── client/   # React frontend (Vite)
└── server/   # Express backend
```

## Setup

### Prerequisites
- Node.js 18+
- MongoDB running locally (or MongoDB Atlas URI)

### Backend

```bash
cd server
npm install
# Copy and configure env
cp .env.example .env
# Edit .env: set MONGODB_URI, CLIENT_URL, ADMIN_API_KEY
npm run dev
```

Server starts at `http://localhost:5000`

### Frontend

```bash
cd client
npm install
cp .env.example .env
# VITE_API_URL=http://localhost:5000
npm run dev
```

Frontend starts at `http://localhost:5173`

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/applications` | None (rate-limited: 5/hr/IP) | Submit application |
| GET | `/api/applications` | `x-api-key` header | Admin: list all applications |
| GET | `/api/health` | None | Health check |

## Environment Variables

### Server (`server/.env`)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nstp_akd
CLIENT_URL=http://localhost:5173
ADMIN_API_KEY=your_secret_key_here
```

### Client (`client/.env`)
```
VITE_API_URL=http://localhost:5000
```

## Features

- Full landing page with Hero, Stats Bar, About, Who Should Apply, What You Get, How It Works, FAQ, Application Form sections
- Animated count-up stats using Intersection Observer
- Framer Motion scroll animations throughout
- Accordion FAQ with smooth height animation
- Application form with React Hook Form + Zod validation
- Pre-fills stage dropdown when clicking track CTA buttons
- Toast notifications on form submission
- Rate limiting (5 submissions/IP/hour)
- Server-side input validation
- `/thank-you` page with confetti animation
- 404 page
- Sticky navbar with scroll-spy active link highlighting
- Mobile-responsive with hamburger menu drawer
- Custom green scrollbar
