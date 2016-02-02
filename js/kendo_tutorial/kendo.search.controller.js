(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController() {
    var vm = this;
    vm.onSearch = onSearch;
    function onSearch(){
      var q = vm.txtsearch;
      console.log(q);
      var grid = vm.gridResult.dataSource;
      grid.filter([
            {"logic":"or",
             "filters":[
                 {
                    "field":"name",
                    "operator":"eq",
                    "value":q},
                 {
                     "field":"category",
                      "operator":"eq",
                      "value":q}
             ]},
        ]);
      grid.sort([
          {
            "field": "name",
            "dir": "asc"
        }
        ]);
    }
    var dataSource = new kendo.data.DataSource({
      data: [
        { name: "Tea", category: "Beverages" },
        { name: "Coffee", category: "Beverages" },
        { name: "Ham", category: "Food" },
        { name: "Aaa", category: "Food" },
        { name: "Sss", category: "Food" },
        { name: "Bbb", category: "Food" }
      ],
    });

    vm.gridResult = {
      dataSource: dataSource,
      sortable: true,
      filterable: true,
      columns: [
          {
            field: "name",
            title: "name"
          },
          {
            field: "category",
            title: "category"
          }
        ]
      };
  }
})();
