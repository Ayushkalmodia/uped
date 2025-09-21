const dotenv = require('dotenv');
dotenv.config();

const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  const result = await imagekit.upload({   // 👈 use instance, not class
    file: file,       // file path, base64, or URL
    fileName: fileName,
  });
  return result;
}

module.exports = {
  uploadFile,
};
