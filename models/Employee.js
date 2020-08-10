var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for employees
var Employee = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
},{
    collection: 'employeeInfo'
});

module.exports = mongoose.model('Employee', Employee);