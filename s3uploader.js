const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

async function uploadLogToS3() {
    if (!process.env.S3_BUCKET_NAME) {
        console.log('No S3 bucket configured');
        return;
    }

    if (!fs.existsSync('app.log')) {
        console.log('No log file to upload');
        return;
    }

    try {
        const fileContent = fs.readFileSync('app.log');
        const key = `logs/app-${new Date().toISOString().split('T')[0]}.log`;
        
        await s3Client.send(new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
            Body: fileContent
        }));
        
        console.log(`Log uploaded to S3: ${key}`);
    } catch (error) {
        console.error('Failed to upload log to S3:', error.message);
    }
}

module.exports = { uploadLogToS3 }; 