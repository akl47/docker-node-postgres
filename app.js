/* Globals */
global.env = process.env.NODE_ENV || 'development';
global.db = require('./models');

const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    db.User.findAll().then(val=>{
        res.json(val)
    })
})
app.get('/:name',(req,res)=> {
    db.User.create({
        displayName:req.params.name
    }).then(val=>{
        res.json(val)
    })
})


app.listen(3000, () =>{
    db.sequelize
    .sync({
        force:false
    }).then(()=>{
        console.log('Sequelize Running')
    }).catch(err=>{
        console.log('SHITTERS CLOGGED:'+err.message)
    })
})


