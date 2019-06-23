const express = require('express');
const app = express();

// DB Connection
require('./connection');

// Test control
const test = require('./controls/test');
app.use('/api', test);

// Controls
const register = require('./controls/register');
app.use('/api', register); 

const login = require('./controls/login');
app.use('/api', login);

app.listen('9090', () => console.log('Server is listening on port :9090'))