var markdownIt = require('markdown-it');
var highlight = require('highlight.js');
var htmlparser = require('htmlparser2');
var domutils = require('domutils');

var wrapPrefix = 'markdeck-';
var tags = ['page', 'section', 'content'];
var wrappers = tags.map(function(wrap) {
	wrap = wrapPrefix+wrap;
	return '<'+wrap+'></'+wrap+'>';
}).join('')

function parse(md, options) {
	options = options || {};

	options.highlight = function (code, lang) {
		return highlight.highlight(lang, code).value;
	};

	var html = markdownIt(options).render(md);
	var handler = new htmlparser.DomHandler(function (error, dom) {
		tags.map(function(tag){
			var el = domutils.find(function(el){ return el.name === wrapPrefix+tag }, dom, true);
			domutils.removeElement(el);
			return el;
		});
	});

	var parser = new htmlparser.Parser(handler);
	parser.write('<'+wrapPrefix+'-presentation>'+html+wrappers+'<'+wrapPrefix+'-presentation>');
	parser.done();

	return html;
}


module.exports = {
	parse: parse
};
