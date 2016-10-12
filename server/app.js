/* eslint-disable no-console */
/* eslint-disable arrow-parens */

// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/bcaMockup';

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// DB CONNECT
require('mongoose').connect(MONGO_URI, err => {
  if (err) throw err;
  console.log(`MongoDB connected to ${MONGO_URI}`);
});

// APP DECLARATION
const app = express();

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: false }
}));


// STATIC DECLARATION
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLING

// Development error Handler
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error Handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// SERVER LISTEN
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server listening at http://localhost:${PORT}`);
}
);
