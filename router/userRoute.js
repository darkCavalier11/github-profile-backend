const mongoose = require('mongoose')
const express = require('express')
const UserModel = require('../db/User')
const cors = require('cors');
const app = express()
const router = new express.Router()

app.use(express.json())
app.use(cors());

router.post('/add', async(req, res)=>{
    try{
    	console.log(req.body);
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send(user)
    }
    catch(err){
    	console.log("error");
        res.status(400).send({
            error: "Email address already in use."
        })
    }
})

module.exports = router
