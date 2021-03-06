var loop = require('vdom-loop');
var state = require('observ-struct')({ example: 'example' });
var h = loop.h;  // expose virtual-dom/h

var el = loop(state, render);
document.body.appendChild(el);

function render(state) {
  return h('div', state.example);
}
