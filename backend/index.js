const express =  require('express')
const app = express()
const cors =  require('cors')
const {Auth} = require('./middlewares/auth.js')
const connectWithDb = require("./config/mongoDB");
const bodyParser = require("body-parser");
var fileupload = require("express-fileupload");

require("dotenv").config();

//connect with database
connectWithDb();

app.use(cors());
// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const hp = require("./controllers/hpController.js")
const patient = require("./controllers/patientController")

// Routes

app.use("/api/provider",hp);
app.use("/api/patient",patient);


app.listen(5000, () => {
	console.log('Server started on 5000')
})

