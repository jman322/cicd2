# Pipeline Project

A simple Express.js application with logging that saves to a file and uploads to S3.

## Features
- Express.js server
- `/health` endpoint for health checks
- Simple file logging using Winston
- S3 log upload capability
- Environment variable configuration (DRY)
- Docker support
- Jest tests

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file with:
```
PORT=3000
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
- Server logs will be written to `app.log`
- Console will show server status

### Upload Logs to S3
```bash
node upload-logs.js
```
- Uploads the current `app.log` file to your S3 bucket
- Files are stored as `logs/app-YYYY-MM-DD.log`

### Test the Health Endpoint
```bash
curl http://localhost:3000/health
```
- Returns `{"status":"OK"}`
- Logs the access to `app.log`

### Running Tests
```bash
npm test
```

### Docker
```bash
docker build -t pipelineproject .
docker run -p 3000:3000 pipelineproject
```

## Files Created
- `app.log` - Contains all application logs in JSON format
- Logs include timestamps and structured data

## How It Works
1. **DRY Configuration**: All settings use environment variables
2. **Simple Logging**: Winston logs to file and console
3. **S3 Upload**: Manual script uploads logs to S3 bucket
4. **Health Monitoring**: Health endpoint logs every access

Perfect for assignments requiring simple logging with S3 storage!

## License
MIT
