const express = require('express');
const router = express.Router();
const prisma = require('../db');


router.get('/',async(req,res)=>{
  try {
    await prisma.customer.findMany({
      data:{
        customer:{
          name :'',
          email:'' ,
          password: '',
          phone_number :''
        }
      }
    })
    
  } catch (error) {
    console.log(()=>{"error finding profile"});
    res.status(500).json({message:"internal server error"})
  }
})












module.exports = router
