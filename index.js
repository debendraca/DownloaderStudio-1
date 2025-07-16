const express=require('express');
const bodyparser=require('body-parser');



const app=express();
const portNo=3000;
app.listen(portNo,()=>{
    console.log(`Server started at port ${portNo}` );
});