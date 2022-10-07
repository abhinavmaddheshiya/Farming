const express = require('express');

const router = require('./routes');

const app = express();
app.use(express.json());
const cors = require("cors");
const corsOptions = {
	origin: '*',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use("/farmer", router);

module.exports = app;
