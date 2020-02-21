const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))