# Parallel-Container-Test

A minimal AdonisJS 6 project that demonstrates a basic Node.js server with AdonisJS-style routing.

**🚀 This application is designed to run in Kubernetes clusters and supports containerized deployment.**

## Features

- ✅ AdonisJS 6 dependencies installed
- ✅ Simple HTTP server with routing
- ✅ JSON API responses
- ✅ Health check endpoint
- ✅ ES modules support
- ✅ Docker containerization ready
- ✅ Kubernetes deployment manifests
- ✅ Production-ready container security

## Getting Started

### Local Development

#### Installation

```bash
npm install
```

#### Running the Server

```bash
# Production start
npm start

# Development mode with file watching
npm run dev
```

The server will start on `http://localhost:3333`

### Docker Deployment

#### Build and Run with Docker

```bash
# Build the Docker image
docker build -t parallel-container-test:latest .

# Run the container
docker run -p 3333:3333 parallel-container-test:latest
```

#### Using Docker Compose

```bash
# Start the application
docker compose up

# Stop the application
docker compose down
```

### Kubernetes Deployment

This application is designed to run in Kubernetes clusters. Deployment manifests are provided in the `k8s/` directory.

#### Deploy to Kubernetes

```bash
# Apply all Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -l app=parallel-container-test

# Check service status
kubectl get services

# Access logs
kubectl logs -l app=parallel-container-test
```

#### Kubernetes Resources

- **Deployment**: Runs 3 replicas with health checks and resource limits
- **Service**: ClusterIP service exposing the application internally
- **Ingress**: Optional ingress for external access (requires ingress controller)

#### Remove from Kubernetes

```bash
# Remove all resources
kubectl delete -f k8s/
```

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
├── Dockerfile         # Docker container configuration
├── docker-compose.yml # Docker Compose configuration
├── .dockerignore      # Docker build ignore rules
├── .gitignore         # Git ignore rules
└── k8s/               # Kubernetes deployment manifests
    ├── deployment.yaml # Kubernetes deployment
    ├── service.yaml    # Kubernetes service
    └── ingress.yaml    # Kubernetes ingress
```

## Container Features

- **Multi-stage optimized build**: Uses Node.js 20 Alpine for minimal image size
- **Security hardened**: Runs as non-root user with restricted capabilities
- **Health checks**: Built-in health monitoring for both Docker and Kubernetes
- **Resource limits**: Configured memory and CPU limits for Kubernetes deployment
- **Production ready**: Optimized for production workloads with proper logging