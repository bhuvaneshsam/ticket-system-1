// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ticket routes working!');
});

module.exports = router;
