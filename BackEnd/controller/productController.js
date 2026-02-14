import { v2 as cloudinary } from 'cloudinary';
import { json } from 'express';
import ProductModel from '../model/productModel.js';


const addProduct = async (req, res) => {

   

    try {
        const { name, price, description, category, subCategory, size, bestseller, } = req.body;

        // const image1 = req.files.image1 && req.files.image1[0];
        // const image2 = req.files.image2 && req.files.image2[0];
        // const image3 = req.files.image3 && req.files.image3[0];
        // const image4 = req.files.image4 && req.files.image4[0];


        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        // console.log(req.files);

        const image = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // if (!name || !price || !description || !category || !subCategory || !size) {
        //     return res.status(400).json({ success: false, message: "All fields are required......." });
        // }

        let imageurls = await Promise.all(
            image.map(async (img) => {
                const result = await cloudinary.uploader.upload(img.path,);
                // console.log("img url", result.secure_url);
                return result.secure_url;
            })
        );

        // console.log(name, price, description, category, subCategory, size, bestseller,);
        // // Create a new product instance
        const newProduct = new ProductModel({
            name,
            price: Number(price),
            description,
            category,
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            // size: JSON.parse(size),
            size: size && size !== "undefined" ? size.split(',').map(s => s.trim()) : [],
            image: imageurls,
            date: new Date(),
        });

        // // Save the product to the database
        const product = await newProduct.save();
        res.status(201).json({ success: true, message: "Product added successfully" });
         console.log("product added successfully");

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}

const listProduct = async (req, res) => {

    try {
        const products = await ProductModel.find({});
        // console.log(products);
        res.json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.body.id);

// console.log("prodict id" , req.body.id);

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }

}

const singleProduct = async (req, res) => {
    const { productid } = req.params;

    const product = await ProductModel.findById(productid);

    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
}

export { addProduct, listProduct, deleteProduct, singleProduct };