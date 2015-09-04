var marked = require('marked');
// https://github.com/markdown-it/markdown-it
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
