var express = require('express');
var appRoutes = express.Router();

// Require employee model in our routes module
var Employee = require('../models/Employee');

// Add employee
appRoutes.route('/add').post((req, res) => {
  const employee = new Employee(req.body);
  employee.save().then(employee => {
        res.status(200).json({'employee': 'Employee added successfully'});
        console.log(employee);
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    });

// Get employee
appRoutes.route('/').get((req, res) => {
  Employee.find().sort({name: 1})
      .then(results => {
        res.json(results)
        console.log(results)})
      .catch(err => res.status(400).send("unable to load database"))
  });

// Edit employee
appRoutes.route('/edit/:id').get((req, res) => {
  const id = req.params.id;
  Employee.findById(id, (err, employee) => {
      res.json(employee);
  });
});

//  Update employee
appRoutes.route('/update/:id').put((req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (!employee)
      return next(new Error('Could not load Document'));
    else {
      employee.name = req.body.name;
      employee.email = req.body.email;

      employee.save().then(employee => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Delete employee
appRoutes.route('/delete/:id').delete((req, res) => {
  Employee.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = appRoutes;