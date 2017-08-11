var express = require('express'),
    app = express(),
    path = require('path'),
    handlebars = require('express-handlebars'),
    PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.get("/", function(req, res) {
    res.render('index');
});

app.get("/browse", function(req, res) {
    res.render("browse");
});

app.get("/pdp", function(req, res) {
    res.render("pdp");
});

app.listen(PORT, function() {
    console.log('App is listening on port ' + PORT);
});
