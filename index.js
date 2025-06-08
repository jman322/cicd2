const express = require('express');
const logger = require('./logger');

const app = express();

// Environment validation
const requiredEnvVars = ['PORT'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
    logger.error(`Missing required environment variables: ${missingVars.join(', ')}`);
}

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`, {
        ip: req.ip,
        userAgent: req.get('User-Agent')
    });
    next();
});

const STATUS_OK = "OK";

// Health endpoint with detailed information
app.get("/health", (request, response) => {
    const healthInfo = {
        status: STATUS_OK,
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        memory: process.memoryUsage(),
        version: process.version
    };
    
    logger.info('Health check endpoint accessed', healthInfo);
    response.status(200).json(healthInfo);
});

// Ready endpoint for Kubernetes-style probes
app.get("/ready", (request, response) => {
    logger.info('Readiness check endpoint accessed');
    response.status(200).json({
        status: "READY",
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error('Unhandled error:', {
        error: err.message,
        stack: err.stack,
        url: req.url,
        method: req.method
    });
    res.status(500).json({
        error: 'Internal Server Error',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    logger.warn(`404 - Route not found: ${req.method} ${req.url}`);
    res.status(404).json({
        error: 'Route not found',
        path: req.url,
        timestamp: new Date().toISOString()
    });
});

module.exports = app;