const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { name } = require('ejs');
const getUserId = require('../cooki');
 


router.get('/',async(req,res)=>{
  const userid = getUserId(req)
  if(!userid) {
  return  res.redirect('/')
  }

  try {
    const user = await prisma.customer.findUnique({//server fetching user data from db
     where: {
      id : userid,
     }, include: {
     Booking :{
    include: {
    car: true,
    hotel: true,
    site: true,
    TourGuide: true,
    }
     }
     }
    })

    res.render('profile', {user})
    
  } catch (error) {
    console.log(()=>{"error finding profile"});
    res.status(500).json({message:"internal server error"})
  }
})












module.exports = router
