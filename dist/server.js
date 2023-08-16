const express = require('express');
const app = express();
const path = require('path');

// Serve the "dist" folder
app.use(express.static(path.join(__dirname, 'dist')));

// Secret message route
app.get('/message', (req, res) => {
  const secretMessage = document.getElementById("secret").textContent;
  res.send(secretMessage);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});