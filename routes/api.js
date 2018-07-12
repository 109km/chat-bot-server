const express = require('express');
const axios = require('axios');
const config = require('../config');
const router = express.Router();
const intent = require('../controllers/intent');

/* GET chat intent */
router.get('/message/:q', (req, res) => {
  let q = encodeURIComponent(req.params.q);
  // Get intents' infomation from LUIS
  axios.get(config.LUIS_MODEL_URL + q).then(function(response) {
    let results = intent.processIntent(response.data);
    res.send(results);
  }, function(err) {
    res.send({
      code: -1,
      err:err
    });
    console.error(err);
  });
});


module.exports = router;