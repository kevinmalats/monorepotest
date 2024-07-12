import express from 'express';
import bodyParser from 'body-parser';
import router from './core/router.js'
const app = express()
const PORT = 8000

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    return res.json("Hola Adri")
})

app.use("/api/v1", router)

app.listen(PORT,()=>{
    console.log(`listen in the port ${PORT}`)
})

