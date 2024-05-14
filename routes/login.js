const express = require('express');
const router = express.Router();
const prisma = require('../db');


router.post('/',async(req,res)=>{
  try {
   const usersname = req.body.username;
   const usersemail = req.body.useremail;
   const userspassword = req.body.userpassword;
   const usersphone = req.body.usernumber;
  //  const userimage = req.body.userimage

   console.log({usersemail, userspassword, usersname, usersphone}, req.body)

   const user = await prisma.customer.create({
    data:{
   name : usersname,    
   email: usersemail,
   password :userspassword,
   phone_number: usersphone,

    }
   }) 

   // server crated cooki and asking brousr for update
  res.cookie("userIdCookie", user.id)

  // getting the user id from req
  const userId = getUserId(req)

 
  console.log( userId )

   res.redirect('/')
  } catch (error) {
  console.log("error login in", error);
    res.status(500).json({message:"internal server error"})
  }
})

const getUserId = (req) => {
  const cookies = req.headers.cookie?.split(";")?.map(cookie =>  cookie.trim().split("=")) ?? [[]]
  const userIdCookie = cookies.find(cookie => cookie[0] == 'userIdCookie')
  if(!userIdCookie) return undefined ;
  const userId = userIdCookie[1]
  return +userId
}



module.exports = router
