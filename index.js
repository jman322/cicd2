const express = require('express');
const logger = require('./logger');

const app = express();

const STATUS_OK = "OK";

app.get("/health", (request, response) => {
    logger.info('Health check endpoint accessed');
    response.status(200).json({
        status: STATUS_OK
    });
});

module.exports = app;