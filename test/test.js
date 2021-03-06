'use strict';
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var test = require('ava');

test('transpile CSS', function (t) {
	t.plan(4);

	var css = 'body {\n  width: 50px;\n}';
	var dest = path.join(__dirname, 'tmp/test.css');

	fs.readFile(dest, 'utf8', function (err, data) {
		t.assert(!err, err);
		t.assert(data === css, data);

		rimraf(path.join(__dirname, 'tmp'), function (err) {
			t.assert(!err, err);

			rimraf(path.join(__dirname, '../tmp'), function (err) {
				t.assert(!err, err);
			});
		});
	});
});
