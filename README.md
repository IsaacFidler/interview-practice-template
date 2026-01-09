# Interview Practice Template

Full-stack Next.js + Nest.js template for technical interview practice.

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- Material UI
- Styled Components
- TypeScript

**Backend:**
- Nest.js
- TypeScript
- Jest for testing

## Quick Start

```bash
# Install dependencies
yarn

# Start both frontend and backend in development mode
yarn dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Available Scripts

```bash
# Development
yarn dev          # Start both frontend and backend
yarn dev:web      # Start frontend only
yarn dev:api      # Start backend only

# Build
yarn build        # Build both apps
yarn build:web    # Build frontend only
yarn build:api    # Build backend only

# Testing
yarn test         # Run backend tests
yarn lint         # Lint both apps

# Cleanup
yarn clean        # Remove all node_modules and build artifacts
```

## Project Structure

```
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/         # App router pages
│   │   │   ├── components/  # React components
│   │   │   ├── lib/         # Utilities
│   │   │   └── theme/       # MUI theme config
│   │   └── package.json
│   │
│   └── api/                 # Nest.js backend
│       ├── src/
│       │   ├── app.module.ts
│       │   ├── app.controller.ts
│       │   └── app.service.ts
│       └── package.json
│
├── package.json             # Root workspace config
└── README.md
```

## API Endpoints

The backend runs on port 3001 with `/api` prefix. The frontend proxies requests to `/api/*`.

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Example endpoint

## Practice Ideas

- Build a todo app with CRUD operations
- Create user authentication with JWT
- Implement real-time features with WebSockets
- Build a data dashboard with charts
- Create a file upload system
- Add a database (PostgreSQL, MongoDB, etc.)

## Using as GitHub Template

1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone and start practicing!
