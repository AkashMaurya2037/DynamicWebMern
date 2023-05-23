const mongodb = require("mongoose")

mongodb.connect("mongodb://localhost:27017/dynamicMen",{})
.then(()=>{
    console.log("MongoDB is Connected")
}).catch((error)=>{
    console.log(error + "Error when trying to connect with mongodb")
})