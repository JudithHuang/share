/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../node_modules/angular/angular',
    'bson-objectid': '../node_modules/bson-objectid/objectid'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});
