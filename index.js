'use strict';
/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: '@lblod/frontend-mandatendatabank-engine',
  lazyLoading: false,
  isDevelopingAddon(){ return true; }
});
