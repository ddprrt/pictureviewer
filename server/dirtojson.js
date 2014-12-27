'use strict';

var fs = require('fs'),
	path = require('path');


function dirTree(dir) {
	var stats = fs.lstatSync(dir),
		info = {
			path: dir,
			name: path.basename(dir)
		};

	if(stats.isDirectory()) {
		info.type = 'folder';
		info.children = fs.readdirSync(dir).map(function(child) {
			return dirTree(dir + '/' + child);
		});
	} else {
		info.type = 'file';
	}

	return info;
};

module.exports = dirTree;
