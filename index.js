'use strict';

var Filter = require('broccoli-filter');
var myth = require('myth');

/**
 * Initialize `MythFilter`
 *
 * @param {Object} inputTree
 * @api public
 */

function MythFilter(inputTree) {
    if (!(this instanceof MythFilter)) {
        return new MythFilter(inputTree);
    }

    this.inputTree = inputTree;
}

/**
 * Create object
 */

MythFilter.prototype = Object.create(Filter.prototype);
MythFilter.prototype.constructor = MythFilter;

/**
 * Extensions
 */

MythFilter.prototype.extensions = ['css'];
MythFilter.prototype.targetExtension = 'css';

/**
 * Process CSS
 *
 * @param {String} str
 * @api public
 */

MythFilter.prototype.processString = function (str) {
    return myth(str);
};

/**
 * Module exports
 */

module.exports = MythFilter;
