const express = require('express')
const mongoose = require("mongoose");
const path = require('path')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.use(express.static(static_path));
app.set('view engine', 'hbs')
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.get('/',(req,res)=>{
    res.render('index')
})
 
mongoose
  .connect(
    "mongodb+srv://amanmahto:anuragf45@amanscluster.os0m9fw.mongodb.net/registration?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`MongoDb Connected`);
  })
  .catch((err) => {
    console.log(`${err}`);
  });

app.listen(port,()=>{
    console.log(`sever is running at port ${port}`)
})