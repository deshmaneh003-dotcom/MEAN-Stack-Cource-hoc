// Backend Project

//Node js
//Express js
//DB MongoDB

// API list

//  1. Create iteam - Get data value from frontend {iteam details} and store into DB

// 2. Update iteam - get iteam details from frontend which iteam we need to update

// 3. Delete iteam - get iteam details from frontend and on delete this record from database

// 4. get ALL Records - get ALL records from DB and show to UI frontend

//const getData = () => {

//}

//function getData(){
    
//}

console.log("Hello Node js Projrct strted");
const express = require('express')//
const app = express() //
const mongoose = require('mongoose')//

app.use(express.json())//

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("mongo DB connected")).catch( (error) =>console.log(error) )

const iteamSchema = new mongoose.Schema({

decription : String,
sellingPrice : Number

})

const Iteam = new mongoose.model("Iteam",iteamSchema)//