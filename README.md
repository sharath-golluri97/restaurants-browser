# Restuarants browser
## Prerequisite
Node.js runtime environment of 10.16.0.

## Quick Start
```bash
# Install dependencies
npm ci

# Start JSON server on port 4000
npm run start:server

# Start client with hot reload on port 3000
npm run start
```

### List All Available Custom Script
```bash
npm run
```

### Build Client for Production
To compile the React component in production mode, type
```bash
npm run build
```

## Client: Create React App
The React setup is bootstrapped with Create React App. Locally it serves `public/index.html`, and creates a bundle with `src/index.jsx` as the entry.

Locally it is running on port `3000`, and proxies API calls through `localhost:4000`.

In production build it creates the bundle along with an injected `index.html` in `build/`, and can be served statically.

## Server: JSON Server
This project uses JSON server to fulfill the API portion with a single JSON file.

Locally it let Create React App to serve the client, allowing for hot reload to happen.

In production we pick up the static assets built by `npm run build`, and serve them through the same backend port (4000).

## Deployment
Deploy the application with docker, and is configured by `now.json`

## Docker
```bash
# Build the image
docker build -t {SOME_TAG} .
# Run the container with exposing port 5000
docker run -p 5000:4000 {SOME_TAG}
```
