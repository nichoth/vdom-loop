var Loop = require('main-loop');

module.exports = function(state, render, vdom) {
  var loop = Loop( state(), render, vdom );
  state(loop.update);
  return loop.target;
};
