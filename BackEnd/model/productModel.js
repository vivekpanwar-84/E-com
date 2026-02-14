import mongoose from "mongoose";

const producrtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    bestseller: {
        type: Boolean,
        
    },
     date: {
        type: Number,
        required:true,}
        

});

const Product = mongoose.model("Product", producrtSchema) || mongoose.model.Product;

export default Product;
// export default mongoose.model("Product", producrtSchema) || mongoose.model.Product;