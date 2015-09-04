var markdownIt = require('markdown-it');
var highlight = require('highlight.js');


function parse(md, options) {
	options = options || {};

	options.highlight = function (code, lang) {
		return highlight.highlight(lang, code).value;
	};

	return markdownIt(options).render(md);
}


module.exports = {
	parse: parse
};
