var test = require('tape');

var helpers = require('./helpers');
var markdeck = require('../index');


helpers.allFixtures().forEach(function(fixtureName) {

    test(fixtureName, function (t) {
        t.plan(1);

        var fixture = helpers.fixture(fixtureName+'.md');
        var output = markdeck.parse(fixture.input);

        t.ok(output.match(fixture.output), 'Output should contain "'+fixture.output+'".');
    });


});

