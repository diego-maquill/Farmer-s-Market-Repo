// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();

// Configure the Express application
var PORT = process.env.PORT || 3000;

const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes");
const db = require("./models");

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './public')));


// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(apiRoutes)
/* 
// Add the application routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);
 */
// Start listening on PORT
db.sequelize.sync().then(() => {
    app.listen(PORT, function () {
        console.log('Snap & Farm app is listening on PORT: ' + PORT);
    });
});