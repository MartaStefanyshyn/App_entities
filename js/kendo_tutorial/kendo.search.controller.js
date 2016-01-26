(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController() {
    var vm = this;
    vm.onSearch = onSearch;
    function onSearch(value){
      var q = value;
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
    }
    var dataSource = new kendo.data.DataSource({
      data: [
        { name: "Tea", category: "Beverages" },
        { name: "Coffee", category: "Beverages" },
        { name: "Ham", category: "Food" }
      ],
    });

    vm.gridResult = {
      dataSource: dataSource,
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
