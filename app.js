const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
//app.use(express.static('public'))
const fs = require('fs')
const http = require('http')

const path = require('path')
const {products} = require('./data')
//const homePage = path.join(__dirname, 'navbar-app', 'index.html')
// // const homeStyle = fs.readFileSync(path.join(__dirname, 'public', 'styles.css'),'utf8')
// // const homeLogic = fs.readFileSync(path.join(__dirname, 'public', 'browser-app.js'),'utf8')
// // const homeImage = fs.readFileSync(path.join(__dirname, 'public', 'logo.svg'),'utf8')

// //set up static and middleware
app.use(express.urlencoded({extended: false}))
app.use(express.static('public2'))
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    //res.status(200).sendFile(homePage)
    const newProduct = products.map(product =>{
        const {id, name,title, url} = product
        return {id, name, title, url}
    })
    res.status(200).json(newProduct)
})

app.get('/api/products/:productId', (req,res) => {
    console.log(req)
    console.log(req.params)
    const {productId} = req.params
    const singleProduct = products.find(product => product.id === Number(productId))
    if (!singleProduct) {
        return res.send('Product does not exist')
    }
    res.json(singleProduct)
})
app.get('/api/products/:productId/review/:reviewId',(req,res) =>{
    console.log(req.params)
    res.send('hELLO World')
})
app.get('/api/v1/query',(req,res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProduct = [...products]
    if (search){
        sortedProduct = sortedProduct.filter(product =>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length < 1){
        return res.status(200).json([{success:"true", data:[]}])
    }
    res.status(200).json(sortedProduct)
})
app.post('/login', (req,res) => {
    const name = req.body.name
    console.log(name)
    if (name){
        return res.status(201).json(`Welcome ${name}`)
    }
    res.send('You have not entered name')

})
app.post('/api/people', (req,res) => {
    const name = req.body.body
    console.log(name)
    if (!name){
        return res.status(401).json({success:false, msg:"please provide a name"})
    }
    res.status(200).json({msg:`welcome ${name}`})
})

app.all('*',(req,res) =>{
        res.status(200).send('<h1>Page not found</h1>')
    })


app.listen(PORT, ()=>{
        console.log(`serve listens to port ${5000}`)
    })




