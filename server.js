const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res) => {
  res.status(404);
  res.redirect('404.html')
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})