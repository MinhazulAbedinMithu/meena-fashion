const express = require("express");
const {
	getAllProducts,
	createProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/product");
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router
	.route("/:id")
	.get(getSingleProduct)
	.patch(updateProduct)
	.delete(deleteProduct);

module.exports = router;
