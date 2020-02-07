var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb+srv://PanicLobster:PanicLobster@letappcluster-f3nje.gcp.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

