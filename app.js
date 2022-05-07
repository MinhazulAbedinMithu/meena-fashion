const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandle = require("./middleware/errorHandle");
const notFound = require("./middleware/notFound");
require("dotenv").config();
const productsRoutes = require("./routes/product");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//Route API
app.get("/", (req, res) => {
	res.send('<h2>Store API</h2><a href="/api/v1/products">Products</a>');
});

// <<<----- MiddleWares ----->>>

//Product Routes :::::
app.use("/api/v1/products", productsRoutes);

// extra handling routes :::
app.use(notFound);
app.use(errorHandle);

const start = () => {
	try {
		connectDB(process.env.MONGO_URI);
		app.listen(PORT, console.log(`App is Listening at PORT : ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
