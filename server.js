require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Server is running<h2>`);
});

module.exports = server;