const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require("./data")

server.use('/static', express.static(__dirname + "/public"))
//server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
        name: "Rocketseat",
        description: "Educação voltada para a formação de programadores",
        aulas: "Aulas online de:",
        aula: [
            {name: "JavaScript"},
            {name: "HTML"},
            {name: "CSS"},
        ]
    }

    return res.render('about', {about: about})
})

server.get("/classes", function(req, res) {
    return res.render('courses', { items: pages })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const page = pages.find(function(page) {
        if(page.id == id) {
            return true
        }
    })

    if(!page)
        return res.status(404).render("not-found");

    return res.render("page", { item: page})
})

server.listen(5000, function(){
    console.log("Server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});