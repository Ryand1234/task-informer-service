require('dotenv').config();
const mongoose = require('mongoose')
const { checkForTask } =  require('./tasks')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
  	console.log("Service Starts")
  	checkForTask();
  })
  .catch(()=>{
  	console.log("Connection to  Database Fails.");
  })