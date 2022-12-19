const express=require("express")
const cors = require("cors")
const {productRouter }  = require("./routes/productRouter")
const { pr_connection } = require("./config/pr_db")
const app=express()
app.use(cors({
    origin: "*"
}))
app.use(express.json())
const PORT= 8080
app.get("/",(req,res)=>{
    res.send("homepage")
})
app.use("/products", productRouter)


app.listen(PORT,async()=>{
    await pr_connection
  
    console.log(`http://localhost:${PORT}`)
})