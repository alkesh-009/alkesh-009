const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('<h1 style="color: Green;">Hello from Node.js App deployed via CI/CD!</h1>');
});

// Health check route
app.get('/health', (req, res) => {
  res.sendStatus(200);
});

// Start server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
