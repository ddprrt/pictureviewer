'use strict';

var express = require('express'),
	logger	= require('morgan'),
	d2json	= require('./dirtojson'),
	path	= require('path');

var server = express();

console.log(d2json(process.argv[2]));

server.use(express.static(path.resolve(__dirname + '/../frontend/')))
	.use(express.static(path.resolve(__dirname + '/../bower_components/')))
	.use('/images', express.static(path.resolve(process.argv[2])))
	.use(logger())

server.listen(3000);
