const express = require("express")
const servidor = express()
const hbs =require("hbs")
servidor.listen(80)
servidor.use(express.static(`${__dirname}/views`))
servidor.set(`view engine`, `hbs`)
hbs.registerPartial(`${__dirname}/views/partials`)
servidor.get("/",(req,res)=>{
    res.render("index.hbs",{
        nombre:"diego"
    })
})
servidor.get("/usuarios",(req,res)=>{
    res.send("pagina usuario")
})

servidor.get("/",(req,res)=>{
    res.send("login.hbs")
})
