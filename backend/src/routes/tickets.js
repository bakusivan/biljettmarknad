const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Post a new ticket
router.post('/tickets', async (req, res) => {
  console.log("Received request to post ticket:", req.body);
  const ticket = new Ticket(req.body);
  try {
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tickets with a specific service provider
router.get('/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find({ serviceProvider: req.query.serviceProvider });
    res.send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
