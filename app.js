/////////////////////////////////////////////////
//                    SETUP                    //
/////////////////////////////////////////////////
var	express					= require("express"),
	mongoose				= require("mongoose"),
	passport				= require("passport"),
	bodyParser				= require("body-parser"),
	User					= require("./models/user"),
	LocalStrategy			= require("passport-local"),
	passportLocalMongoose	= require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo");
var app	= express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

/////////////////////////////////////////////////
//          PASSPORT & SESSION CONFIG          //
/////////////////////////////////////////////////

app.use(require("express-session")({
	secret: "Now are the winters of our discontent.",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/////////////////////////////////////////////////
//                MAIN ROUTES                  //
/////////////////////////////////////////////////

// INDEX
app.get("/", function(req, res) {
	res.render("home");
});

app.get("/secret", function(req, res) {
	res.render("secret");
});

/////////////////////////////////////////////////
//                AUTH ROUTES                  //
/////////////////////////////////////////////////
// Show sign up form
app.get("/register", function (req, res) {
	res.render("register");
});
// Handle user sign up
app.post("/register", function (req, res) {
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if (err) {
			console.log("There was an error");
			console.log(err);
			return res.render("register");
		}
		// passport allows us to swap strategies. In this case we are using local
		passport.authenticate("local")(req, res, function(){
			res.redirect("/secret");
		});
	});
})

/////////////////////////////////////////////////
//                 LOGIN ROUTES                //
/////////////////////////////////////////////////

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res){
});

/////////////////////////////////////////////////
//                 SERVER SETUP                //
/////////////////////////////////////////////////

app.listen(process.env.PORT || 9302, process.env.IP, function () {
	console.log("Server started on 9302");
})