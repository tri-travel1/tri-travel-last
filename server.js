const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8008;
const prisma =  require('./db')
const logins = require('./routes/login')
const profile = require('./routes/profile')
const bookings = require('./routes/booking')




app.set("view engine" , "ejs")
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'./public')))
app.use('/login',logins);
app.use('/profile',profile);
app.use('/booking', bookings);



app.get('/exploreee',async(_,res)=>{
  const cars = await prisma.car.findMany();
  const hotels = await prisma.hotel.findMany();
  const tours = await prisma.tourGuide.findMany();
  const sits = await prisma.site.findMany();
  console.log({cars, hotels, tours, sits})
  return res.render('exploreee',{
    cars,hotels,tours,sits
  })
})

app.get('/profile',async(_,res)=>{
  const cars = await prisma.car.findMany();
  const hotels = await prisma.hotel.findMany();
  const tours = await prisma.tourGuide.findMany();
  const sits = await prisma.site.findMany();
  const users = await prisma.customer.findMany();
  console.log({cars, hotels, tours, sits,customer})
  return res.render('profile',{
    cars,hotels,tours,sits,users
  })
})















app.listen(port,()=> console.log(`server is running on ${port}`))