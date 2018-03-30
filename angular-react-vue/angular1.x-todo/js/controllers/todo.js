/*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - exposes the model to the template and provides event handlers
 */

define([
  'angular',
  '../engine/dist/index'
], function (angular, engine) {
  const { Todos, ObjectIDHelper } = engine;

  return ['$scope', '$location', 'filterFilter',
    function ($scope, $location, filterFilter) {
      const todos = $scope.todos = Todos.getList();

      $scope.newTodo = '';
      $scope.editedTodo = null;

      if ($location.path() === '') {
        $location.path('/');
      }

      $scope.addTodo = function () {
        const newTodo = $scope.newTodo.trim();
        if (!newTodo.length) {
          return;
        }

        todos.push({
          title: newTodo,
          completed: false
        });

        $scope.newTodo = '';
      };


      $scope.editTodo = function (todo) {
        $scope.editedTodo = todo;
        // Clone the original todo to restore it on demand.
        $scope.originalTodo = angular.copy(todo);
      };


      $scope.doneEditing = function (todo) {
        $scope.editedTodo = null;
        todo.title = todo.title.trim();

        if (!todo.title) {
          $scope.removeTodo(todo);
        }
      };

      $scope.revertEditing = function (todo) {
        todos[todos.indexOf(todo)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
      };

      $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
      };


      $scope.clearDoneTodos = function () {
        $scope.todos = todos = todos.filter(function (val) {
          return !val.completed;
        });
      };


      $scope.markAll = function (done) {
        todos.forEach(function (todo) {
          todo.completed = done;
        });
      };
    }
  ];
});
