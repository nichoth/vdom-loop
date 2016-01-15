var vdom = require('virtual-dom');

module.exports = vdomLoop;

function vdomLoop(state, render) {
  return require('./lib/vdom-loop')(state, render, vdom);
}

vdomLoop.h = vdom.h;
