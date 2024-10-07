const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  serviceProvider: { type: String, required: true },
  zone: { type: String, required: true },
  price: { type: Number, required: true },
  payment: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);
