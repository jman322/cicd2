

const express = require('express');

const app = express();

app.get("/health", (request, response) => {
    response.status(200).json({
        status: "OK"
    });
});


module.exports = app;