const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri =  "mongodb+srv://rizwan:Rizwan1233@cluster0.zo7j8sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Employee=require('./empoyee')

mongoose.connect(uri,{
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })

    .then(() => {
        console.log("Connected to MongoDB");

        // Update one record in employee
        return Employee.updateOne({ emp_name: "John Doe" },
            { email: "jdoe@somewhere.com" });
    })
    .then((updateOneResult) => {
        console.log("Updated Docs for updateOne:", updateOneResult);
        console.log("One record updated");

        // Update many records in employees
        return Employee.updateMany({ age: { $gt: 30 } },
            { location: "New York" });
    })
    .then((updateManyResult) => {
        console.log("Updated Docs for updateMany:", updateManyResult);
        console.log("Many records updated");

    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });