const express=require('express');



const getAllProduct=async(req,res)=>{
    res.status(200).json("hello Details");
}



module.exports={
    getAllProduct
};