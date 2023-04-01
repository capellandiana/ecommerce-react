import express from 'express'
import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"capellandiana",
    password:"password",
    database:"meowmazon_stock"

})


app.get("/", (req,res) => {
res.json('hellofrom backend')
})

app.get("/shop", (req,res) => {
    const q = "SELECT * FROM Products2"
    db.query(q,(err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
    })

app.listen(8800, ()=> {
    console.log('connected')
})