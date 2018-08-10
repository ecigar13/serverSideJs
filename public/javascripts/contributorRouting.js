var app = angular.module('contributorRouting', []);

app.controller('contributorController', function ($scope) {
  $scope.member = ["Khoa T Nguyen", "Hung Vuong", "Cynthia Nguyen", "Peter Tran"];
  $scope.members = [{
    name: "Khoa T Nguyen",
    github: "https://github.com/khoanguyen0791",
    email: "kxn161730@utdallas.edu",
    facebook: "https://www.facebook.com/ktn197",
    linkedin: "https://www.linkedin.com/in/ktn0047/",
    phone: "660-988-3837",
    biography: `Keith Nguyen is pursuing a Computer Science degree at UT Dallas.
    Previously,
    he worked at Associa and used his coding skills to automate invoice printing,
    journal posting and data retrieval from company database. His personal projects
    involves contributing to ally-api tool, pitest and Express, Angular and ReactJS.
    `

  }, {
    name: "Hung Vuong",
    github: "https://github.com/hungvuong816/",
    email: "hungvuong816@gmail.com",
    phone: "469-358-9713"
  }, {
    name: "Cynthia Nguyen",
    github: "https://github.com/hungvuong816/",
    email: "",
    phone: "",
    github: "https://github.com/anhcynthia",
    facebook: "https://www.facebook.com/AnhCynthiaNguyen94"
  }, {
    name: "Peter Tran",
    github: "",
    email: "",
    phone: "469-693-0637",
    github: "",
    facebook: ""
  }]
});
alert("I'm trying to do dynamic loading with ngRoute, but EJS prevents serving static webpages.");