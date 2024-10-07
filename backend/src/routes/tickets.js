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

// Get all tickets with a specific service provider and zone
router.get('/tickets', async (req, res) => {
  console.log("Received request to get tickets:", req.query); // Log incoming query parameters
  try {
      const { serviceProvider, zone } = req.query; // Destructure serviceProvider and zone
      const query = {};
      
      // Only add to the query if they are provided
      if (serviceProvider) query.serviceProvider = serviceProvider;
      if (zone) query.zone = zone;
      
      const tickets = await Ticket.find(query); // Query the database
      res.send(tickets);
  } catch (error) {
      res.status(500).send(error);
  }
});

module.exports = router;
