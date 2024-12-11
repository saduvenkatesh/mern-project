import express from 'express'
import connectDB from "./config/db.js"
import productRoutes from "./routes/product.route.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json()) // allows us to accept JSON data in the body
const PORT = process.env.PORT || 3000
app.use("/api/products",productRoutes)

app.listen(3000,()=>{
    connectDB()
    console.log('server is running on http://localhost:'+PORT)
})