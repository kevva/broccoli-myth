'use strict';

var Filter = require('broccoli-filter');
var myth = require('myth');

function MythFilter(inputTree) {
	if (!(this instanceof MythFilter)) {
		return new MythFilter(inputTree);
	}

	this.inputTree = inputTree;
}

MythFilter.prototype = Object.create(Filter.prototype);
MythFilter.prototype.constructor = MythFilter;
MythFilter.prototype.extensions = ['css'];
MythFilter.prototype.targetExtension = 'css';
MythFilter.prototype.processString = function (str) {
	return myth(str);
};

module.exports = MythFilter;
