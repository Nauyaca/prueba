const express = require('express')
const imagesRouters = require('./images')
const profileRouters = require('./profile')
const homeRouters = require('./home')
const viewerRouters = require('./viewer')
const authRouters = require('./auth')


function routerApi(app){
  app.use('/images', imagesRouters)
  app.use('/profile', profileRouters)
  app.use('/home', homeRouters)
  app.use('/viewer', viewerRouters)
  app.use(express.json())
  app.use('/auth', authRouters)
}

module.exports = routerApi
