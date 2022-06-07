const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const authRouters = require('./routers/auth.routers');
const userRouters = require('./routers/user.routers');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

const dbURI = process.env.dbURI;

mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use('/auth', authRouters);
app.use('/users', userRouters);

//Home
app.use("/", (req, res) => {
 res.json({ message: "Titlepool Backend!"})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});

app.listen(port, () => {    
  console.log(`Listening on port ${port}`)
})

module.exports = app;