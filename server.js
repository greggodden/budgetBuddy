const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.SERVER_PORT || 5000;

app.get('/api/isConnected', (req, res) => {
  res.status(200);
});

// boot server
app.listen(PORT, () => {
  console.log(`*** Server running on ${PORT} ***`);
});
