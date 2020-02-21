const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))