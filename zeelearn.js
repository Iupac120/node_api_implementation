
const path = require('path')
const {readFile} = require('fs')
const http = require('http')
console.log('first task')

// for (let i = 0; i < 10; i++){
//     console.log('Second task')
// }
setTimeout(()=>{
    console.log('second task')
}, 0)
//third task
console.log('Third task')

readFile(path.join(__dirname, 'event.txt'),'utf8',(err, data)=>{
    if (err) throw err
    console.log(data,' ' ,'file read')
}, readFile(path.join(__dirname, 'event.txt'), 'utf8',(err, data)=>{
    if (err) throw err
    console.log('file 2', data)
},readFile(path.join(__dirname, 'event.txt'), 'utf8',(err, data)=>{
    if (err) throw err
    console.log('file 3', data)
})))

console.log('read file completed')

function name(){
    return console.log('You are a girl')
}
function greet(nam, cb){
    return console.log(`Good morning ${nam}, ${cb()}`)
}
greet('mary',name)
console.log('testing asynch')
// setInterval(()=>{
//     console.log('set interval at work')
// }, 3000)
// 
const server = http.createServer((req,res)=>{
    console.log('hello world')
    res.end('End request')
})
server.listen(5000, ()=>{
    console.log('server listens at port 5000')
})