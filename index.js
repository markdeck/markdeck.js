var marked = require('marked');
var highlight = require('highlight.js');


function parse(md, options) {
	options = options || {};

	options.highlight = function (code) {
		return highlight.highlightAuto(code).value;
	};

	return marked(md, options);
}


module.exports = {
	parse: parse
};
