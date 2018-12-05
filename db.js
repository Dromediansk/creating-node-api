//creating connetion to MongoDB database

var mongoose = require('mongoose');
mongoose.connect('mongodb://johnny123:johnny123@ds127094.mlab.com:27094/creating-node-api', { useNewUrlParser: true });