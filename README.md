# Pipeline Project

A simple Express.js application with a health check endpoint, ready for containerization and CI/CD pipelines.

## Features
- Express.js server
- `/health` endpoint for health checks
- Docker support
- Jest tests

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation
```bash
npm install
```

### Running the Application
You can start the server with:
```bash
npm start
```
The server will run on the port specified in the `PORT` environment variable, or default to `3000`.

### Environment Variables
Create a `.env` file in the root directory to override defaults:
```
PORT=4000
```

### Running Tests
```bash
npm test
```

### Docker
To build and run the app in Docker:
```bash
docker build -t pipelineproject .
docker run -p 3000:3000 pipelineproject
```

## Endpoints
- `GET /health` — Returns `{ status: "OK" }`

## License
MIT
