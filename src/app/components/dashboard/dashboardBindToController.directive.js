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
