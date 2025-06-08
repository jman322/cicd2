# Pipeline Project

A production-ready Express.js application with comprehensive CI/CD pipeline, logging, and AWS integration.

## Features
- Express.js server with production middleware
- `/health` and `/ready` endpoints for monitoring and Kubernetes-style probes
- Comprehensive logging using Winston with structured JSON format
- S3 log upload capability with automated deployment
- Multi-stage CI/CD pipeline with security scanning
- Multi-stage Docker build with security optimizations
- Comprehensive test suite with coverage reporting
- Environment variable validation and error handling

## CI/CD Pipeline Features
- **Automated Testing**: Runs tests across Node.js 18, 20, and 22
- **Coverage Reporting**: Enforces 80% code coverage thresholds
- **Security Scanning**: NPM audit and Trivy Docker image scanning
- **Multi-stage Docker Build**: Optimized for production with non-root user
- **Health Checks**: Container health monitoring and deployment validation
- **Automated Deployment**: ECS Fargate deployment with rollback capability

## Tools & Technologies Used
- **Node.js & Express.js**: Web server framework
- **Winston**: Structured logging with JSON format and file rotation
- **Jest & Supertest**: Testing framework with API endpoint testing
- **Docker**: Containerization using Alpine Linux for minimal footprint
- **GitHub Actions**: CI/CD automation with workflow triggers
- **AWS ECR**: Container registry for Docker images
- **AWS ECS Fargate**: Serverless container deployment
- **AWS S3**: Log storage and artifact management

## Technology Choices & Rationale
- **Express.js over alternatives**: Lightweight, mature ecosystem, and excellent middleware support
- **Winston over console.log**: Structured logging, multiple transports, and log levels for production
- **Jest over Mocha**: Built-in assertions, mocking, and code coverage without additional dependencies
- **ECS Fargate over EC2**: Serverless container management reduces infrastructure overhead
- **GitHub Actions over Jenkins**: Integrated with repository, no separate server maintenance required
- **Alpine Linux**: Minimal Docker base image reduces attack surface and image size

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file with:
```PORT=3000
NODE_ENV=production
AWS_ACCESS_KEY_ID=your_aws_access_key_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_here
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-logs-bucket-name
```

### 3. Create S3 Bucket
- Create an S3 bucket in AWS
- Get your AWS access key and secret key
- Update the `.env` file with your credentials

## Usage

### Run the Server
```bash
npm start
```
- Server logs will be written to `app.log` and structured logs to `logs/`
- Console will show server status with structured logging

### Upload Logs to S3
```bash
node upload-logs.js
```
- Uploads the current `app.log` file to your S3 bucket
- Files are stored as `logs/app-YYYY-MM-DD.log`

### Test Endpoints
```bash
# Health check with detailed system info
curl http://localhost:3000/health

# Readiness probe (Kubernetes-style)
curl http://localhost:3000/ready
```

### Running Tests
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### Docker
```bash
# Build optimized production image
docker build -t pipelineproject .

# Run with health checks
docker run -p 3000:3000 pipelineproject

# Check container health
docker exec <container_id> curl http://localhost:3000/health
```

## CI/CD Pipeline

The project includes a complete CI/CD pipeline:

1. **Test Stage**: Matrix testing across Node.js versions with coverage
2. **Security Stage**: NPM audit and Docker image vulnerability scanning  
3. **Build Stage**: Multi-stage Docker build with optimization
4. **Deploy Stage**: Automated ECS Fargate deployment with health checks

## Files Created
- `app.log` - Application logs in JSON format
- `logs/` - Structured daily log files with rotation
- `coverage/` - Test coverage reports
- `deployment.log` - CI/CD pipeline logs (uploaded to S3)

## Production Features
- **Environment Validation**: Checks required environment variables
- **Error Handling**: Comprehensive error middleware with structured logging
- **Security**: Non-root Docker user, vulnerability scanning, audit checks
- **Monitoring**: Health and readiness endpoints with system metrics
- **Performance**: Multi-stage builds, caching, and optimization

Perfect for production deployments requiring enterprise-grade CI/CD practices!

## License
MIT

