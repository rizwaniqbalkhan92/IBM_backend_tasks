const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./empoyee');

const uri =  "mongodb+srv://rizwan:Rizwan1233@cluster0.zo7j8sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri,{
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })

    .then(() => {
        console.log("Connected to MongoDB");

        // Delete one record from employees
        return Employee.deleteOne({ age: { $lt: 30 }, location: "New York" });
    })
    .then((deleteOneResult) => {
        console.log("Deleted document for deleteOne:", deleteOneResult);

        // Delete many records from employees
        return Employee.deleteMany({ emp_name: { $regex: "R" } });
    })
    .then((deleteManyResult) => {
        console.log("Deleted documents for deleteMany:", deleteManyResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });