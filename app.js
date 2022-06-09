const express = require("express");
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTES
app.use('/', routes);

app.listen(3000, () => console.log('Server listening on port 3000'));