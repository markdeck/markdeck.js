var test = require('tape');

var helpers = require('./helpers');
var markdeck = require('../index');

test('timing test', function (t) {
    t.plan(1);

    var fixture = helpers.fixture('highlighting.md');

    t.equal(markdeck.parse(fixture.input), fixture.output);
});
