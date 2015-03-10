// from http://facebook.github.io/jest/docs/tutorial-react.html
var ReactTools = require('react-tools');
var MAGIC = "/** @jsx";
module.exports = {
    process: function(src, file) {
        if (src.slice(0, MAGIC.length) != MAGIC) return src;
        return ReactTools.transform(src);
    }
};
