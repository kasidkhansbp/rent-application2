const path = require('path'),
  routes = require('./routes'),
  exphbs = require('express-handlebars'),
  express = require('express'),
  session = require('express-session');
  cookieParser = require('cookie-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  nodemailer = require('nodemailer'),
  cors = require('cors');

const {
  OAuth2Client
} = require('google-auth-library');
client = new OAuth2Client('452772637773-61ablseaj861narh01j83f875ifdv7qo.apps.googleusercontent.com');

module.exports = (app) => {
  app.use(morgan('dev'))
  app.use(express.urlencoded({
    'extended': false
  }));
  app.use(express.json());
  app.use(methodOverride());
  app.use(cookieParser('sramanujan-cookieparser'));
  app.use(session({
    secret: 'sramanujan-session'
  }));
  app.use(cors());
  routes(app);
  //app.set('views', path.join(__dirname, '/../views'));
  // app.use(express.static(path.join(__dirname, '../public')));
  if ('development' == app.get('env')) {
    app.use(errorHandler());
  }
  // app.set('view engine', 'handlebars');
  // app.engine('handlebars', exphbs({
  //   defaultLayout: 'main'
  // }));
  return app;
}
