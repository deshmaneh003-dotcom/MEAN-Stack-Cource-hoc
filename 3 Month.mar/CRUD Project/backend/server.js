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

console.log("hello")

const express = require("express")
const { ServerDescription } = require("mongodb")
const app = express()
const mongoose = require("mongoose")


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/item-database").then( () => console.log("mongo DB Connected")).catch((error)=> console.log(error))


const itemsSchema = new mongoose.Schema({
    name  :String,
    Description : String,
    sellingprice : Number
})

const items = new mongoose.model("Item", itemsSchema)




//API 1 - Create item
app.post("/api/create-item" ,async(req , res)=>{

    try{

        const{ name, Description ,sellingprice }= req.body

        const saveItem = new items(
            { 
            name ,
            Description ,
            sellingprice
         }
        ) 

        await saveItem.save()
        res.status(201).json({message : "Item Created" , data :saveItem})

    } catch (error){
       console.log(error)
        
    }

})

//API 2-Update/Edit Item

app.put("/api/create-item", (req , res)=>{


    try{

    } catch (error){
        console.console.log(error)
        
    }
})

//API 3- Delete Item
app.delete(".api/delete-item" ,(req , res) =>{

      try{

    } catch (error){
        console.console.log(error)
        
    }

})

//APT 4 -GetAll Item
app.get("/api/get-all-item", async(req , res)=>{
 
         try{

            const allitems = await items.find()
            res.status(200).json({message : " Get All Items List",data : allitems})
    } catch (error){
        console.log(error)
        
    }

})


//helth API

app.get("/helth",(req , res)=>{
    res. status(200).json({message: "sever is Run"})

})

//sever start
const PORT = 9090
app.listen(PORT,() =>{
    console.log("sever stareted" )
})

