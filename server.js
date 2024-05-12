const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8008;
const prisma =  require('./db')
const logins = require('./routes/login')
const profile = require('./routes/profile')



app.set("view engine" , "ejs")
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'./public')))
app.use('/login',logins);
app.use('/profile',profile);


app.get('/explore',async(_,res)=>{
  const cars = await prisma.customer.findMany();
  const hotels = await prisma.hotel.findMany();
  const tours = await prisma.tourGuide.findMany();
  const sits = await prisma.site.findMany();
  
  return res.render('explore',{
    cars,hotels,tours,sits
  })
})















app.listen(port,()=> console.log(`server is running on ${port}`))