(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('BpmController', BpmController);

  /** @ngInject */
  function BpmController($scope) {
    var vm = this;
    vm.camForm = null;

    var camClient = new CamSDK.Client({
      mock: false,
      apiUri: 'http://localhost:8080/engine-rest'
    });
    var taskService = new camClient.resource('task');
    var formContainer = $('.column.right');

    function loadTasks() {
      taskService.list({}, function(err, results) {
        if (err) { throw err; }

        $scope.$apply(function() {
          vm.tasks = results._embedded.task;
        });
      });
    }



    function addFormButton(err, camForm) {
      if (err) { throw err; }

      var submitBtn = $('<button type="submit">Complete</button>')
        .click(function () {
          camForm.submit(function (err) {
            if (err) { throw err; }

            formContainer.html('');

            loadTasks();
          });
        });

      camForm.formElement.append(submitBtn);
    }



    vm.loadTaskForm = function(event) {
      var taskId = $(event.currentTarget).attr('data-task-id');
      formContainer.html('');

      taskService.form(taskId, function(err, taskFormInfo) {
        var url = taskFormInfo.key.replace('embedded:app:', taskFormInfo.contextPath + '/');

        new CamSDK.Form({
          client: camClient,
          formUrl: url,
          taskId: taskId,
          containerElement: formContainer,

          done: addFormButton
        });
      });
    };
    loadTasks();
  }
})();
