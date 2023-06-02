const express = require('express')

const mongoose = require('mongoose');
const TransectionRouter = require("./routes/transectionRoutes");
let bodyParser = require('body-parser')
const app = express()
app.use(express.json())


mongoose.set("strictQuery" , false)
mongoose.connect('mongodb+srv://Naved:Navedijaz@nodefirstapi.u9ydq5a.mongodb.net/Node_API?retryWrites=true&w=majority')
  .then(() => console.log(' Mongoose Connected!'));

app.get('/', function (req, res) {
  res.send('Hello Pakistan')
})

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())


  app.use("/TransectionDeatil", TransectionRouter);
 

  app.listen(3001, () =>{
    console.log("node api is running on the port of 3001")
})
app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
