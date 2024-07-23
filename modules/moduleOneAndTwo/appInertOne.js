const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./empoyee');
const uri =  "mongodb+srv://rizwan:Rizwan1233@cluster0.zo7j8sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri,{
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  });

//insertOne record into employee
let newEmployee = new Employee({
    emp_name: 'John Doe',
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
});
newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employees collection after insertOne")
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
});