require('dotenv').config() // or import 'dotenv/config' // for esm
console.log(process.env.PORT, "===>")
// // Backend Project // //Node js // //Express js  // //DB MongoDB
//expres js is framework of node js creat api use
const express = require('express')
//app=variable => stores express js
const app = express()
//cross 
const cors = require('cors')
//connect mongodb database
const { connectDB } = require('./config/db')
const {addItem , editItem , deleteItem ,  getAllItems} = require('./controllers/itemscontrollers')
const { login, register } = require('./controllers/authControllers')
const { getDashboardCount } = require('./controllers/dashboardControllers')
// frontend converts all data in json format
app.use(express.json())
//middleware: enable Cross-origin Resource sharing
app.use(cors())
// MongoDB database connection
//----------------
connectDB()

//Auth API's authantication api's
app.post("/api/login" , login)
app.post("/api/register" , register)


//POST API 1- Create Item
app.post("/api/create-item", addItem)
// PUT API 2- Update/Edit
app.put("/api/update-item", editItem)
// DELETE API - to remove database
app.delete("/api/delete-item/:id", deleteItem)
//API - GetAll Item
app.get("/api/get-all-item", getAllItems)


// Dashboard API's  
//Get All to catch all items from database
app.get("/api/get-dashboard" , getDashboardCount)

 

//simple API to check server  is running
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server Is Running" })
})


// -----------------
// Server Start
// ----------------

// Define port number when server will run
const PORT = process.env.PORT || 3131

//start express server
app.listen(PORT, () => {
    console.log(`Server Is runing ${PORT}`)
})