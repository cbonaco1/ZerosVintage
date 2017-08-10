var express = require('express'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 9999;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile("/index.html");
});

// app.get("/browse", function(req, res) {
//     res.sendFile("/browse.html");
// });
//
// app.get("/pdp", function(req, res) {
//     res.sendFile("/pdp.html");
// });

app.listen(PORT, function() {
    console.log('App is listening on port ' + PORT);
});
