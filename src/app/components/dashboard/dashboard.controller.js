;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = [];

    function DashboardController() {
        var vm = this;
        vm.onButtonClick = function(){
        	alert("Alert from controller!")
        }
    }
}(window, angular, undefined));
