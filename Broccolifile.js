'use strict';

var myth = require('./');

module.exports = function (broccoli) {
    return myth(broccoli.makeTree('test/fixtures'));
};
