require('dotenv').config();
const { uploadLogToS3 } = require('./s3uploader');

async function main() {
    console.log('Uploading logs to S3...');
    await uploadLogToS3();
    console.log('Done.');
}

main().catch(console.error); 