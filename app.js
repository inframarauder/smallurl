require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const api = require('./api/routes');

//init express app
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//connect to mongoDB:
const { DB_URI } = process.env;
mongoose
  .connect(DB_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  })
  .then(() => console.log('Connection to DB established!'))
  .catch((err) => {
    console.error('Error in connecting to DB', err);
    process.exit(-1);
  });

//configure routes:
app.get('/', (req, res) => {
  res.send('working');
});

app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//configure port and run server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running on port' + port));
