var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(
    session({
        secret: 'secret',
        belepve: false
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
require("./route/index")(app);
app.use((err, req, res, next) => {
    res.end('Hiba');
    console.log(err);
});
var server = app.listen(3000, function() {
    console.log("On port 3000");
})