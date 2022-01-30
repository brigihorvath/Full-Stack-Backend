const passport = require('passport');
require('./db').connectDb();
// require('./googleAuth');

const app = require('express')();

require('./config').config(app);
require('./config/session.config').sessionInit(app);

app.use(passport.initialize());
app.use(passport.session());

require('./googleAuth')(passport);

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes);

const tourRoutes = require('./routes/tour.routes');
app.use('/', tourRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/', userRoutes);

const questionRoutes = require('./routes/question.routes');
app.use('/', questionRoutes);

require('./error-handling')(app);

module.exports = app;
