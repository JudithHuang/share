/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'controllers/todo', 
		'directives/todoFocus', 
		'directives/todoEscape'
	], function (todoCtrl, todoFocusDir, todoEscapeDir) {
		angular
			.module('todomvc', [todoFocusDir, todoEscapeDir])
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
