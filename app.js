var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb+srv://PanicLobster:PanicLobster@letappcluster-f3nje.gcp.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('./static/'));
app.set('view engine', 'ejs');

var City = require('./models/city');
var State = require('./models/state');
var User = require('./models/user');

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
    User.find({}, function(err, users){
        if (err){
            console.log(err);
        } else {
            res.render('list', {users: users})
        }
    })
})

app.post('/list/new', function(req, res){
    var name        = req.body.name,
        email       = req.body.email,
        birthdate   = req.body.birthdate,
        cpf         = req.body.cpf,
        state       = req.body.state,
        city        = req.body.city,
        github      = req.body.github;
    var newUser = {name: name, email: email, birthdate: birthdate, cpf: cpf, state: state, city: city, github: github}
    User.create(newUser, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
            res.redirect('/list')
        }
    })
})

app.listen(80, process.env.IP, function(){
    console.log('Server Started');
});