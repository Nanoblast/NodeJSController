const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
require("./route/index")(app);
const server = app.listen(3000, function() {
    console.log("On port 3000 POGGERS");
})