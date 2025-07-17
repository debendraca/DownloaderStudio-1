const express=require('express');
const bodyparser=require('body-parser');
const caRouter=require('../CommunityApplication/ca_Router/router')
require('dotenv').config();
const path = require('path');
const open=require('open');
const hostname=require('os');



const app=express();

const PORT = process.env.PORT || 5000;

//const filePath = path.join(__dirname, 'public', 'home.html');
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}` );
    
});
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Or send a specific HTML file manually
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.use(bodyparser.json());
app.use('/api',caRouter);