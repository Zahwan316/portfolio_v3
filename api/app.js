const express = require("express")
const emailjs = require("nodemailer")
const app = express();
const port = 3200;
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const transporter = emailjs.createTransport({
    service:'gmail',
    auth:{
        user:"alphatester316@gmail.com",
        pass:"qoslgwjznqdiahib"
    }
})



app.use("/email_send",async(req,res) => {
        try{
            const info = await transporter.sendMail({
                from:req.body.name,
                to:"alphatester316@gmail.com",
                subject:`Ada Pesan dari ${req.body.name}`,
                text:req.body.message
            })
            res.status(200).json({
                message:"Data berhasil dikirim",
                data:info,
                method:req.method
            })
        }
        catch(e){
            console.log(e)
            res.status(400).json({
                message:e.message,
                method:req.method
            })
        }
    

})


app.listen(port,() => {
    console.log(`App start in localhost:${port}`)
})