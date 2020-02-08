var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb+srv://PanicLobster:PanicLobster@letappcluster-f3nje.gcp.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var City = require('./models/city');
var State = require('./models/state');

// City.find({'Município': 'Guajará'}, function(err, cities){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(cities);
//     }
// });

app.get('/', function(req, res){
    res.redirect('/list/new');
});

app.get('/list/new', function(req, res){
    City.find({}, function(err, cities){
        if (err){
            console.log(err);
        } else {
            State.find({}, function(err, states){
                if (err){
                    console.log(err);
                } else {
                    res.render('landing', {cities: cities, states: states});
                }
            })
        }
    })
});

app.get('/list', function(req, res){
    res.render('list');
})

app.post('/list', function(req, res){
    var state = req.body.state,
        city  = req.body.city;
    res.redirect('/list')
})

app.listen(3000, 'localhost', function(){
    console.log('Server Started');
});