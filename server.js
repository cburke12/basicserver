const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('This is a successful cloned repo\n');
});
app.listen(1337, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1337/');
});
