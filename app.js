const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth.route')
const rateRoute = require('./routes/rate.route')
const watchRoute = require('./routes/watch.route')
const PORT = process.env.PORT || 5000
const URI = process.env.MONGO_URI
const cors = require("cors");

app.use(cors());
app.use(express.json({extended: true}))
app.use('/api/auth', authRoute)
app.use('/api/rate', rateRoute)
app.use('/api/watch', watchRoute)
app.get('/', (req, res)=>{
  res.send('Hi! I am API')
})
async function start(){
  try{
    await mongoose.connect(URI,{})
    app.listen(PORT, ()=>{
      console.log(`Server started on port ${PORT}...`);
    })
  }catch(e){
    console.log(e)
    process.exit(1)
  }
}

start()
