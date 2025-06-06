require('dotenv').config();
const app = require("./index");
const logger = require('./logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});
