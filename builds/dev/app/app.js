;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates', 'ui.router', 'app.dashboard'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider.state("dashboard", {
            url: "/dashboard",
            controller: "DashboardController as dashboard",
            // this is the place where to resolve dynamic template
            templateProvider: function($templateCache) {
                // simplified, expecting that the cache is filled
                // there should be some checking... and async $http loading if not found
                return $templateCache.get('components/dashboard/dashboard.template.html');
            }
        })
    }
}(window, angular, undefined));

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

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .directive('bindToControllerDirective', bindToControllerDirective);
    bindToControllerDirective.$inject = [];

    function bindToControllerDirective() {
        return {
            restrict: "A",
            link: function bindToControllerDirectiveLinkfunction(scope, element, attrs) {
                element.bind('click', function bindToControllerDirectiveClickFunction() {
                    //Not Recomended
                    scope.$apply("dashboard.onButtonClick()");
                    //Recomended
                    scope.$apply(attrs['bindToControllerDirective']);
                })
            }
        }
    }
}(window, angular, undefined));
