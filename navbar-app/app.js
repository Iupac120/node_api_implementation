const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))
const fs = require('fs')
const http = require('http')

const path = require('path')

//const homePage = path.join(__dirname, 'navbar-app', 'index.html')
// const homeStyle = fs.readFileSync(path.join(__dirname, 'public', 'styles.css'),'utf8')
// const homeLogic = fs.readFileSync(path.join(__dirname, 'public', 'browser-app.js'),'utf8')
// const homeImage = fs.readFileSync(path.join(__dirname, 'public', 'logo.svg'),'utf8')

//set up static and middleware
// app.use(express.static('public'))
// app.use('/',(req,res)=>{
//     res.status(200).sendFile(homePage)
// })

app.all('*',(req,res) =>{
        res.status(200).sendFile('<h1>Page not found</h1>')
    })


app.listen(PORT, ()=>{
        console.log(`serve listens to port ${3000}`)
    })




