const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('../auth/auth-router')
const strainRouter = require('../strains/strains-router')
const auth = require('../auth/authenticate-middleware')

server.use('/api', authRouter)
server.use('/api', auth, strainRouter)

server.get("/", (req, res) => {
  res.send("Server is running...");
});

module.exports = server;