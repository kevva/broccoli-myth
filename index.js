'use strict';

var Filter = require('broccoli-filter');
var myth = require('myth');

function MythFilter(inputTree, opts) {
	if (!(this instanceof MythFilter)) {
		return new MythFilter(inputTree, opts);
	}

	this.inputTree = inputTree;
	this.opts = opts;
}

MythFilter.prototype = Object.create(Filter.prototype);
MythFilter.prototype.constructor = MythFilter;
MythFilter.prototype.extensions = ['css'];
MythFilter.prototype.targetExtension = 'css';
MythFilter.prototype.processString = function (str) {
	return myth(str, this.opts);
};

module.exports = MythFilter;
