import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/angular2-di-decorators.umd.js';
config.moduleName = 'angular2-di-decorators';

export default config;
