var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next){
  console.log('get homepage')
  res.render('index', {
    title: 'Homepage'
  })
})

router.get('/index', function (req, res, next){
  console.log('get homepage')
  res.render('index', {
    title: 'Homepage'
  })
})

router.get('/searchJoke', function (req, res, next){
  console.log('search joke api page')
  res.render('searchJoke', {
    title: 'searchJoke'
  })
})

router.get('/submitJoke', function (req, res, next){
  console.log('submit joke')
  res.render('submitJoke', {
    title: 'submitJoke'
  })
})

router.get('/about', function (req, res, next){
  console.log('about this site')
  res.render('about', {
    title: 'about'
  })
})

router.get('/contact', function (req, res, next){
  console.log('contact information')
  res.render('contact', {
    title: 'contact'
  })
})

router.get('/todoList', function (req, res, next){
  console.log('get todo list')
  res.render('todoList', {
    title: 'todoList'
  })
})
module.exports = router
