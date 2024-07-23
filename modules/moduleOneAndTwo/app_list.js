const mongoose = require('mongoose');
const Employee = require('./empoyee');

const uri =  "mongodb+srv://rizwan:Rizwan1233@cluster0.zo7j8sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri,{
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  });

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })