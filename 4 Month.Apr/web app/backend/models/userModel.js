// user table List in Database

const mongoose = require('mongoose')  // Library - connect mongodb database

//------------------------------
// Schema - Model (Data base table structure)
//-------------------------------

//Define structure of item document in MongoDB
const userSchema = new mongoose.Schema({

    // User  Name
    
    name: String,

     // User  Email

    email: String,


     // User  Password

    password: String
    
})

  // Create collection/table called "Users"
  const Users = mongoose.model("Users", userSchema)


 
module.exports = Users