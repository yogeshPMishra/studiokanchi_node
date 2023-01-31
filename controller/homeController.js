const Category = require("../model/category");
const Product = require("../model/product");
const Subcategory = require("../model/subcategory");

exports.home = ((req, res, next)=>{
    res.json({
        message : "success data",
    });
});

exports.getNewArrival = async (req, res, next)=>{
    try {
        const newArrivalProduct = await Product.find({})
            .populate({
                path : 'category',
                model : Category
            })
            .populate({
                path : 'subcategory',
                model : Subcategory
            })
            .limit(3)
        res.status(200).json({ status : 200, 'message' : 'Success', newArrivalProduct });
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
};

exports.getBestSellerProduct = async (req, res, next) =>{
    try {
        const bestSellerProducts = await Product.find({})
            .populate({
                path:'category',
                model : Category
            })
            .populate({
                path:'subcategory',
                model : Subcategory
            })
            .sort({
                _id : -1
            })
            res.status(200).json({ status : 200, 'message' : 'Success', bestSellerProducts });
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
}