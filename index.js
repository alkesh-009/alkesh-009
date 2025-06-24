const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {

  res.send('<h1 style="color: Black;">Hello from Node.js App deployed via CI/CD!</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

