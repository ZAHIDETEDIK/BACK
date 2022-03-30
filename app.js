const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');


//const userRoutes = require('./routes/user');
//const articleRoutes = require('./routes/article');
//const commentRoutes = require('./routes/comment');
//const likeRoutes = require('./routes/likes');


const app = express();

app.use(helmet());
app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin', '*'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});

app.use(bodyParser.json());

//app.use('/api/auth', userRoutes);
//app.use('/api/auth', articleRoutes);
//app.use('/api/auth', commentRoutes);
//app.use('/api/auth', likeRoutes);

module.exports = app;