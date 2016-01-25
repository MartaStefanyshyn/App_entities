(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('KendoController', KendoController);

  /** @ngInject */
  function KendoController() {
    var vm = this;
    var entits = [];
    for (var i = 0; i<localStorage.length; i++) {
      entits.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
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
})();
