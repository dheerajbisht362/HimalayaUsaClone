//config data
const {DEFAULT_CONNECTION_STRING, PORT, MONGOOSE_OPTIONS} = require("./config/connectionDb");

//connect to express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors())

// Controller

const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");

app.use("/products", productController);
app.use("/users", userController);
app.get("/", async (request, response) => {
	try {
		return response.send("results");
	} catch (err) {
		response.status(401).send(err.message);
	}
});

app.listen(PORT, () => console.log(`xyz is connected successfully to Express. Listening on port ${PORT}.`));

//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS);
mongoose.connection.on("error", err => {
  console.log("Connection Error: Server could not connect successfully to Mongoose.", err);
});
mongoose.connection.on("connected", (err, res) => {
    console.log("Server connected, successfully to Mongoose.");
});