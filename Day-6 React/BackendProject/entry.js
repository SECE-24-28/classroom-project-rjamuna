const express = require('express')
const app=express()
const PORT=8001
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({
     "college":"sece",
     "Dept":"Cys",
     "StuCount":"64"
    })  
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/jamun/OneDrive/Desktop/Mern_Stack_Intern/Day-6 React/BackendProject/index.html')
    })
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 

