const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    return res.render('about')
})

server.get("/classes", function(req, res) {
    return res.render('courses')
})

server.listen(5000, function(){
    console.log("Server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});