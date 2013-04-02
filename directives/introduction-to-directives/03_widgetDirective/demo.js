angular.module('myApp', []).
   directive('myWidget', function () {
      return {
         restrict: 'E',
         replace: true,
         transclude: true,
         template: '<div class="widget">' +
            '<div class="content" ng-transclude></div>' +
            '</div>',
         link: function (scope, element, attrs) {
            element.prepend("<div class='title'>" + attrs.title + "</div>");
         }
      };
   });
