const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
require("./route/index")(app);
var session = require('express-session');
app.use(
    session({
        secret: 'secret'
    })
);
app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});
const server = app.listen(3000, function() {
    console.log("On port 3000 POGGERS");
})