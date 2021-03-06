var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const studentRouter = require('./routes/studentRoute');
const committeeRoute = require('./routes/committeeRoute');
const resultRoute = require('./routes/resultRoute');
const sequelizeInit = require('./config/sequelize/init');
const studApiRouter = require('./routes/api/StudentApiRoute');
const commApiRouter = require('./routes/api/CommitteeApiRoute');
const resultApiRouter = require('./routes/api/ResultApiRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/committees', committeeRoute);
app.use('/results', resultRoute);

app.use('/api/students', studApiRouter);
app.use('/api/committees', commApiRouter);
app.use('/api/results', resultApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelizeInit()
    .catch(err => {
        console.log(err);
    });


module.exports = app;
