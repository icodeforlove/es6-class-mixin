'use strict';

const debug = require('debug')('es6-class-mixin');


module.exports = function(Parent, ...mixins) {
  debug('start to mixin to %s', Parent.name);
  class Mixed extends Parent {}
  for (let mixin of mixins) {
    for (let prop in mixin) {
      debug('mixin %s', prop);
			var descriptor = Object.getOwnPropertyDescriptor(mixin, prop);
			Object.defineProperty(Mixed.prototype, prop, descriptor)
    }
  }
  return Mixed;
};
