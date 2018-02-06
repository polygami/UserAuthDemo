# Authentication
## Intro to Authentication
* What tools are we using?
	* Passport
	* Passport Local
	* Passport Local Mongoose
* Walkthrough auth flow
* Discuss sessions
	* Express-Session

----------
### Passport
> ### Simple, unobtrusive authentication for Node.js
> Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
>
> -- <cite>http://www.passportjs.org/</cite>
----------
### Passport Local

> Username and password authentication strategy for Passport and Node.js.
>
> -- <cite>https://github.com/jaredhanson/passport-local</cite>

----------
### Passport Local Mongoose

> Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport
>
> -- <cite>https://github.com/saintedlama/passport-local-mongoose</cite>

----------
### Sessions

HTTP is supposed to be a **stateless protocol**, meaning that when a request is sent, those requests are one time transactions and don't contain data such as history, which make it hard to do things like user authentication because we want users to be able to stay logged in. We do this by using **sessions**.

Sessions are a way to provide a **state**, so when every request is made, there is some information that is saved.

----------
### Auth Code Along part 1
* Set up folder structure
* Install needed packages
* Add root route and template
* Add secret route and template

----------
### Auth Code Along part 2
* Create User model
* Configure passport