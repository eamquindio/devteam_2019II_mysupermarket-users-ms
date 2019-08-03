const express = require('express');
const routes = require('./app/routes')

const app = express();
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use('/api/users-ms', routes);

app.listen(PORT, () => {
    console.log("Escuchando puerto:", PORT);
});

module.exports = app;
