const express = require('express');  

//Init APP
const app = express(); 

// view on port 3000
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Home route
app.use("/emp", require('./routes/empRoutes'));


// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})