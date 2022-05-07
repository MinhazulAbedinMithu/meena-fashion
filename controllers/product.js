const ProductSchema = require("../model/Product.js");

const getAllProducts = async (req, res) => {
	try {
		const products = await ProductSchema.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getSingleProduct = (req, res) => {
  try {
    
  } catch (error) {
    res.status(500)
  }
}

const createProduct = async (req, res) => {
	try {
		const newProduct = await ProductSchema.create(req.body);
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};



module.exports = { getAllProducts, createProduct };
