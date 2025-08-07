# Parallel-Container-Test

A minimal AdonisJS 6 project that demonstrates a basic Node.js server with AdonisJS-style routing.

## Features

- ✅ AdonisJS 6 dependencies installed
- ✅ Simple HTTP server with routing
- ✅ JSON API responses
- ✅ Health check endpoint
- ✅ ES modules support

## Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
# Production start
npm start

# Development mode with file watching
npm run dev
```

The server will start on `http://localhost:3333`

## Available Endpoints

- `GET /` - Main endpoint with welcome message
- `GET /health` - Health check endpoint with system information

## Development

This is a minimal setup ready for further development. Additional AdonisJS features can be added incrementally.

### Scripts

- `npm start` - Start the server
- `npm run dev` - Start with file watching
- `npm run build` - Build TypeScript (if needed)
- `npm test` - Run tests (placeholder)

## Project Structure

```
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── adonisrc.ts        # AdonisJS configuration
└── .gitignore         # Git ignore rules
```