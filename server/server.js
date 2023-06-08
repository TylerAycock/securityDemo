const express = require(`express`)
const cors = require(`cors`)
const bcrypt = require(`bcryptjs`)

const app = express()
app.use(express.json())
app.use(cors())

const codes = []


app.post(`/submit`, (req,resp)=>{
    console.log(req.body)
    let {banana} = req.body 
    let hashedCode = bcrypt.hashSync(banana)
    console.log(hashedCode)
    codes.push(hashedCode)
    console.log(codes)
})

app.post(`/check`, (req,resp)=>{
    let {code} = req.body
    console.log(code)
    for(let i=0; i<codes.length; i++){
        if(bcrypt.compareSync(code,codes[i])){
            resp.status(200).send(`code matched with DB`)
            return
        }
    }
    resp.status(200).send(`code doesn't match anything we have on file`)
})



app.listen(5050, ()=>console.log(`server working on localhost:5050`))