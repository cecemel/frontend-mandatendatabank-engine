import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
let Eng = Engine.extend({
  modulePrefix,
  Resolver
});

Eng.dependencies = {
    services: ['store']
};

loadInitializers(Eng, modulePrefix);

export default Eng;
