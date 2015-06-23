  /**
   * Logs the passed object to the console.
   *
   * @param  {object}
   */
var banner = require('./banner');

module.exports = {

  log: function () {
    console.log('\x1b[32m', Array.prototype.slice.call(arguments).join(' ') ,'\x1b[0m');
  },

  info: function () {
    console.log(Array.prototype.slice.call(arguments).join(' '));
  },

  error: function () {
    console.log('\x1b[31m', Array.prototype.slice.call(arguments).join(' ') ,'\x1b[0m');
  },

  warn: function () {
    console.log('\x1b[33m', Array.prototype.slice.call(arguments).join(' ') ,'\x1b[0m');
  },

  /** Returns a horizontal rule. */
  hr: function() {
    return repeat(null, process.stdout.getWindowSize()[0]-3);
  },

  makeBanner: function(text) {
    return banner.plot(text);
  }

};

var repeat = function(chr, count) {
  var chr = chr || '-';
  var count = count || 20;
  return Array(count+1).join(chr);
};
