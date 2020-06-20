const express = require('express');
const app = express();

const port = process.env.PORT || 3005;

app.use(express.static(__dirname + '/dist/news-app'));

app.get('**', (req, res) => {
  res.sendFile(__dirname + '/dist/news-app/index.html');
});


app.listen(port, () => {
  console.log('app is running...');
});