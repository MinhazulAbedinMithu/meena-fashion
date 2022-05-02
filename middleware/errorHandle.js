const errorHandle = (err, req, res, next) => {
	console.log(err);
	return res
		.status(500)
		.json({ mgs: "Something Went Wrong. Please try again" });
};

module.exports = errorHandle;
