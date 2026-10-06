const express = require('express')
const mongoose  = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products", productRoute)

app.get('/', (req,res) =>{
    res.send('hello from node API')
})



mongoose.connect("mongodb://oinobivon49_db_user:ptml9sdrZTGHajOi@ac-zdzej6m-shard-00-00.xfjv6rw.mongodb.net:27017,ac-zdzej6m-shard-00-01.xfjv6rw.mongodb.net:27017,ac-zdzej6m-shard-00-02.xfjv6rw.mongodb.net:27017/Node-API?ssl=true&replicaSet=atlas-357qgj-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
    console.log('Connected to database')
})
.catch((err)=>{
    console.log('Connection failed', err.message)
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000..')
})