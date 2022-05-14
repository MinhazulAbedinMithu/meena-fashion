const ProductSchema = require("../model/Product.js");

const getAllProducts = async (req, res) => {
	try {
		const products = await ProductSchema.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getSingleProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const singleProduct = await ProductSchema.find({ _id: id });
		if (!singleProduct) {
			res.status(400).json({ message: "Product Not Found." });
		}
		res.status(200).json(singleProduct);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const updateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedProduct = await ProductSchema.findOneAndUpdate(
			{ _id: id },
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);
		if (!updatedProduct) {
			res.status(400).json({ message: "Please insert updated data." });
		}
		res.status(200).json({ updatedProduct });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedProduct = await ProductSchema.findOneAndDelete({ _id: id });
		if (!deletedProduct) {
			res.status(400).json({ message: "Something went wrong!" });
		}
		res.status(200).json({
			message: `Product: ${deletedProduct.name} deleted Successfully.`,
		});
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createProduct = async (req, res) => {
	try {
		const newProduct = await ProductSchema.create(req.body);
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
};
