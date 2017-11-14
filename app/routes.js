var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/direct-debit-payment', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var radiogroup = req.query.radiogroup

  if (radiogroup === 'card-payment') {
    // redirect to the relevant page
    res.redirect('/card-payment')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('/direct-debit-payment-1')
  }
})

module.exports = router
