


const homePage = fs.readFileSync(path.join(__dirname, 'navbar-app', 'index.html'),'utf8')
const homeStyle = fs.readFileSync(path.join(__dirname, 'navbar-app', 'styles.css'),'utf8')
const homeLogic = fs.readFileSync(path.join(__dirname, 'navbar-app', 'browser-app.js'),'utf8')
const homeImage = fs.readFileSync(path.join(__dirname, 'navbar-app', 'logo.svg'),'utf8')
const server = http.createServer((req,res) =>{ 
    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if (req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h2>About page</h2>')
        res.end()
        //style
    }else if (req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
        //image/logo 
    }else if (req.url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end() 
    }else if (req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
        //404
    }else{
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h2>Not found</h2>')
        res.end()
    }
})

server.listen(5000)

