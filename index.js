const express = require('express');

const app = express();

const STATUS_OK = "OK";

app.get("/health", (request, response) => {
    response.status(200).json({
        status: STATUS_OK
    });
});

module.exports = app;