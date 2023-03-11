require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//needs a function that uploads a file to s3
async function uploadFile(file, bucketName, fileName) {
  // const fileStream = fs.createReadStream(file);

  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: fileName,
  };

  const uploadedImage = await s3.upload(uploadParams).promise();
  return uploadedImage;
}

//downlaod a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };
  return s3.getObject(downloadParams).createReadStream();
}

exports.uploadFile = uploadFile;
exports.getFileStream = getFileStream;
