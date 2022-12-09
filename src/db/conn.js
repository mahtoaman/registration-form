const mongoose = require('mongoose')
mongoose.connect(
  "mongodb+srv://amanmahto:anuragf45@amanscluster.os0m9fw.mongodb.net/registration?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
).then(()=>{
    console.log(`MongoDb Connected`)
}).catch((err)=>{
    console.log(`${err}`)
})