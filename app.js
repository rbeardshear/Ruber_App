var app = angular.module("ruberApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })

        .state("pick", {
            url: "/pick",
            templateUrl: "./views/pick.html",
            controller: "pickController"
        })

        .state("drop", {
            url: "/drop",
            templateUrl: "./views/drop.html",
            controller: "dropController"
        })

        .state("night", {
            url: "/night",
            templateUrl: "./views/night.html",
            controller: "nightController",
        })

})
