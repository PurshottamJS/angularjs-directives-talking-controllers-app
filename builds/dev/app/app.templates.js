(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/dashboard/dashboard.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angularjs Directives Talking To Controllers</h1>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <button bind-to-controller-directive="dashboard.onButtonClick()" class="btn btn-primary">Click Me!</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
