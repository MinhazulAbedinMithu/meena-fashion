const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product Name is Required!"],
		max: [25, "Product name less than 25 characters"],
	},
	price: {
		type: Number,
		required: [true, "Price is required."],
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	company: {
		type: String,
		enum: {
			values: ["nike", "arong", "sailor", "lotto", "nordstrom"],
			message: "Company Name {VALUE} is not Supported!",
		},
	},
	category: {
		type: String,
		enum: {
			values: ["shirt", "t-shirt", "pant", "shoes", "accessories"],
			message: "Category Name {VALUE} is not Supported!",
		},
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("Product", ProductSchema);
