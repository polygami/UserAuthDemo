var express		= require("express"),
	app			= express(),
	mongoose	= require("mongoose")

mongoose.connect("mongodb://localhost/auth_demo");

app.set("view engine", "ejs");

// INDEX
app.get("/", function(req, res) {
	res.render("home");
});

app.get("/secret", function(req, res) {
	res.render("secret");
});

app.listen(process.env.PORT || 9302, process.env.IP, function () {
	console.log("Server started on 9302");
})