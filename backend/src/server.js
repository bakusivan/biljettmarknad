const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/tickets');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://root:password@ticket-db:27017/ticketdb?authSource=admin';

mongoose.connect(MONGO_URI, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Root route
app.get('/', (req, res) => {
  res.json({ message:'Welcome to the Ticket Sharing API!' });
});

app.get('/api/providers', (req, res) => {
  // Placeholder: Replace this with the actual logic to fetch providers
  res.json({ message: 'List of providers' });
});

// Add logging to your server to check if requests are being received correctly
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
