const express = require("express");
const router = express.Router()
let users = require('../users')
let services = require('../services/empServices');

      router.get('/',( req, res) => {
        //res.send({data: "here is the data"})
      //   services();
            const result = services.getEmployees();
            res.status(200).send(result);
      });
      
      router.post('/', (req, res) => {
          const employeeDetails = req.body;
          const result = services.addEmployee(employeeDetails);
      //     console.log('started creating the employee', employeeDetails);
      //     users.push(employeeDetails)
          res.status(201).send(result);
      });
      
      router.put('/:empId', (req, res) => {
            const empId = parseInt(req.params.empId);
            const employeeDetails = req.body;

            let index = users.findIndex(user => user.id === empId);
            if(index >= 0) {
                  users[index] = { ...users[index], ...employeeDetails };
            }
            else {users.push({id: empId, ...employeeDetails});
                  res.status(201).send(employeeDetails);
            }

            res.status(200).send(employeeDetails);
      });
    
      router.delete('/:empId', (req, res) => {
            const empId = parseInt(req.params.empId);
            const employeeToDelete =req.body;

            let index =users.findIndex(user => user.id === empId);
            if (index >=0) {
                  users.splice(index,1  );
                  console.log("detailsl found to be deleted",users );
                  res.send(users )

            }
            else{
            res.send('employee Details not found')
            console.log("details not found")  
            }
      });
      
module.exports = router;     