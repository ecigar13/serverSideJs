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

router.get('/contributor', function (req, res, next){
  console.log('contributor information')
  res.render('contributor', {
    title: 'contributor'
  })
})

router.get('/todoList', function (req, res, next){
  console.log('todoListReact')
  res.render('todoList', {
    title: 'todoListReact'
  })
})

router.get('/todoAngular', function (req, res, next){
  console.log('todoAngular')
  res.render('todoAngular', {
    title: 'todoAngular'
  })
})

router.get('/khoa', function (req, res, next){
  console.log('khoa')
  res.render('./contributor/khoa', {
    title: 'khoa'
  })
})

router.get('/hung', function (req, res, next){
  console.log('hung')
  res.render('./contributor/hung', {
    title: 'hung'
  })
})

router.get('/vanAnh', function (req, res, next){
  console.log('vanAnh')
  res.render('./contributor/vanAnh', {
    title: 'vanAnh'
  })
})

router.get('/peter', function (req, res, next){
  console.log('peter')
  res.render('./contributor/peter', {
    title: 'peter'
  })
})
module.exports = router
