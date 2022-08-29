const express = require('express');
const app = express();
const User = require('./models/User');
const checkAuth = require('./middleware/checkAuth');
const userRoutes = require('./routes/users.route');
const authRoutes = require('./routes/auth.route');
const passport = require('passport');
const strategy = require('./config/jwtOptions');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

User.sync()
    .then(() => console.log('User table created successfully'))
    .catch(err => console.log('User table not created,  error'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use("strategy", strategy);

app.use('/auth', authRoutes);

app.use('/users', checkAuth, userRoutes);

module.exports = app;
