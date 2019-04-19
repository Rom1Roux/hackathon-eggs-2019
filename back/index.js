const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const connectRouter = require('./routes/back/back');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/back', connectRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

let server = app.listen( process.env.PORT || 5001, function(){
  console.log('Listening on port', server.address().port);
})