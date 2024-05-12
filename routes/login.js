const express = require('express');
const router = express.Router();
const prisma = require('../db');


router.post('/',async(req,res)=>{
  try {
   const usersname = req.body.username;
   const usersemail = req.body.useremail;
   const userspassword = req.body.userpassword
   const usersphone = req.body.usernumber

   console.log({usersemail, userspassword, usersname, usersphone}, req.body)

   await prisma.customer.create({
    data:{
   name : usersname,    
   email: usersemail,
   password :userspassword,
   phone_number: usersphone
    }
   }) 
   res.redirect('/profile')
  } catch (error) {
  console.log("error login in", error);
    res.status(500).json({message:"internal server error"})
  }
})



module.exports = router
