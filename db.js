// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();


module.exports = db;

