var fs = require('fs');
var path = require('path');


function fixture(filepath) {
	var parts = fs.readFileSync(path.join(__dirname, 'fixtures', filepath)).toString('UTF-8').split('+++++\n');
	return { input: parts[0], output: parts[1] };
}

function allFixtures() {
	return fs.readdirSync(path.join(__dirname, 'fixtures')).map(function(file){
		return path.basename(file, '.md');
	});
}


module.exports = {
	allFixtures: allFixtures,
	fixture: fixture
};
