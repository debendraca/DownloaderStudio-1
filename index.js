const express=require('express');
const bodyparser=require('body-parser');
const caRouter=require('../CommunityApplication/ca_Router/router')
require('dotenv').config();


const app=express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}` );
});
app.use(bodyparser.json());
app.use('/api',caRouter);