const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});


// import express from "express"
// import mysql from "mysql"
// import cors from "cors"

// const app = express()

// const db= mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"123456",
//     database:"test"
// })


// app.use(express.json());
// app.use(cors())

<<<<<<< HEAD
app.get("/users/:id", (req,res)=>{
    const userId = req.params.id;
    const q=  "SELECT *  FROM users WHERE id = ?"
=======
// app.get("/", (req,res)=>{
//     res.json("hello this is backend");
// })
>>>>>>> b59f2de3835a864355d77ee4cdb3076ea17971a5


// app.get("/users", (req,res)=>{
// const q= "SELECT * FROM users"
// db.query(q,(err,data)=>{
//     if(err) return res.json(err);
//        return res.json(data);
// })
// })

// app.get("/users/:id", (req,res)=>{
//     const userId = req.params.id;
//     const q=  "SELECT *  FROM users WHERE id = ?"


//     db.query(q,[userId], (err,data) =>{

//         if(err) return res.json(err);
//         return res.json(data)
//     })
// })



// app.post("/users", (req,res)=>{
//     const q = "INSERT INTO users (`firstname`,`lastname`,`email`) VALUES (?)";
//     const values= [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//     ];

//     db.query(q,[values], (err,data) => {
//         if(err) return res.json(err);
//         return res.json("users has been crated successfully");
//     })
// })


// app.delete("/users/:id", (req,res)=>{
//     const userId = req.params.id;
//     const q = "DELETE FROM users WHERE id = ?";

//     db.query(q,[userId], (err,data) =>{

//         if(err) return res.json(err);
//         return res.json("user has been deleted successfully")
//     })
// })

// app.put("/users/:id", (req,res)=>{
//     const userId = req.params.id;
//     const q = "UPDATE users SET `firstname` = ?, `lastname` = ?, `email` = ? WHERE id = ?";

//     const values= [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//     ];


//     db.query(q,[...values,userId], (err,data) =>{

//         if(err) return res.json(err);
//         return res.json("user has been updated successfully")
//     })
// })


// app.listen(8800, ()=>{
//     console.log("connected to backend!");
// })