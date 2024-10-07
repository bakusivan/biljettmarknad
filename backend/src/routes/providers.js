const express = require('express');
const router = express.Router();

const serviceProviders = ['Provider1', 'Provider2', 'Provider3'];

router.get('/', (req, res) => {
  res.json(serviceProviders);
});

module.exports = router;
