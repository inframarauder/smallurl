const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('working');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port' + port));
