const express = require('express');
let users = require('../users');



// module.exports = function getUserById(req,res){
//     return res.json(users)
//   };

module.exports.getEmployees = () => {
  return users;
}

module.exports.addEmployee = (employeeDetails) => {
  const newEmployeeDetails = Object.assign({}, employeeDetails);
  users.push(newEmployeeDetails);
  return newEmployeeDetails;
}

module.exports.updateEmployee = (employeeDetails) => [

]