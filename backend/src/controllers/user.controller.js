const express = require("express");
const router = express.Router();

//models
const User = require("../models/user.model");

// <----------------------------------CRUD Operation for users----------------------------------->

router.get("/", async (request, response) => {
	try {
		const results = await User.find().lean().exec();
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.get("/:id", async (request, response) => {
	try {
		const results = await User.findById(request.params.id);
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.get("/query/:email", async (request, response) => {
	try {
		const results = await User.find({ email: request.params.email })
			.lean()
			.exec();
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.post("/", async (request, response) => {
	try {
		const account = await User.findOne({ email: request.body.email })
			.lean()
			.exec();
		if (account !== null)
			return response
				.status(402)
				.send({ error: { message: "Email already present" } });

		const results = await User.create(request.body);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.post("/login", async (request, response) => {
	try {
		const results = await User.findOne({ email: request.body.email })
			.lean()
			.exec();
		if (results.password && results.password === request.body.password)
			return response.send(results);
		else
			response
				.status(402)
				.send({ error: { message: "Invalid details" } });
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.patch("/:id", async (request, response) => {
	try {
		const results = await User.findByIdAndUpdate(
			request.params.id,
			request.body,
			{ new: true }
		);
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.patch("/purchase/:userId", async (request, response) => {
	try {
		const results = await User.findByIdAndUpdate(
			request.params.userId,
			request.body,
			{ new: true }
		);
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

router.delete("/:id", async (request, response) => {
	try {
		const results = await User.findByIdAndDelete(request.params.id);
		console.log(results);
		return response.send(results);
	} catch (err) {
		response.status(401).send(err.message);
	}
});

//export
module.exports = router;