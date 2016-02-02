(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('kendoCollection', kendoCollection);

  /** @ngInject */
  function kendoCollection() {
    var directive = {
        restrict: "E",
        templateUrl: 'js/kendo_tutorial/kendo_dir.html',
        scope: {
          columns: "@",
        },
        controller: KendoCollectionController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;

    /** @ngInject */
    function KendoCollectionController() {
      var vm = this;
      var entits = [];
      for (var i = 0; i<localStorage.length; i++) {
        entits.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      };
      vm.onSearch = onSearch;
      function onSearch(){
        var q = vm.txtsearch;
        var grid = vm.mainGridOptions.dataSource;
        grid.filter([
              {"logic":"or",
               "filters":[
                   {
                      "field":"title",
                      "operator":"eq",
                      "value":q},
                   {
                       "field":"text",
                        "operator":"eq",
                        "value":q},
                    {
                       "field":"description",
                        "operator":"eq",
                        "value":q}
               ]},
          ]);
        grid.sort([
            {
              "field": "title",
              "dir": "asc"
          }
          ]);
      };
      var dataSource = new kendo.data.DataSource({
        transport: {
          read: function (e) {
            e.success(entits);
          },
          create: function (e) {
            localStorage.setItem(e.data.title, JSON.stringify(e.data));
            e.success(e.data);
          },
          update: function (e) {
            var ent = JSON.parse(localStorage.getItem(e.data.title));
            localStorage.setItem(e.data.title, JSON.stringify(e.data));
            e.success();
          },
          destroy: function (e) {
            localStorage.removeItem(e.data.title);
            vm.$apply();
            e.success();
          }
        },
        error: function (e) {
          alert("Status: " + e.status + "; Error message: " + e.errorThrown);
        },
        pageSize: 4,
        batch: false,
        schema: {
          model: {
            title: "title",
            fields: {
              title: { validation: { required: true } },
              text: { type: "string" },
              description: { type: "string", validation: { required: true} },
            }
          }
        }
      });
      vm.mainGridOptions = {
        dataSource: dataSource,
        filterable: true,
        sortable: true,
        pageable: true,
        toolbar: ["create"],
        columns: [{
          field: "title",
          title: "title",
          width: "120px"
          },{
          field: "text",
          title: "text",
          width: "120px"
          },{
          field: "description",
          title: "description",
          width: "120px"},
          { command: ["edit", "destroy"], title: "&nbsp;", width: "200px" }
        ],
        editable: "inline"
      };
    }
  }
})();

