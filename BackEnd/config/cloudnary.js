// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

import {v2 as cloudinary} from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';

const  connectcloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
    });
}

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//         api_key:process.env.CLOUD_API_KEY,
//     api_secret:process.env.CLOUD_API_SECRET
// });


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'finder_DEV',
//       Format:  ['png','jpg','jpeg'], // supports promises as well
//     },
//   });



  export default connectcloudinary;


//   module.exports = {
//     cloudinary,
//     storage,
//   }
  