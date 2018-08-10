var app = angular.module('contributorRouting', []);

app.controller('contributorController', function ($scope) {
  $scope.member = ["Khoa T Nguyen", "Hung Vuong", "Cynthia Nguyen", "Peter Tran"];
  $scope.members = [{
    name: "Khoa T Nguyen",
    github: "khoanguyen0791"
  }, {
    name: "Khoa T Nguyen",
    github: "khoanguyen0791"
  }]
});
alert("I'm trying to do dynamic loading with ngRoute, but EJS prevents serving static webpages.");