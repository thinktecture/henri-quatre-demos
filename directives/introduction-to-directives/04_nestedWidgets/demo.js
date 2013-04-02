angular.module('myApp', []).
   directive('myWidget', function () {
      return {
         restrict: 'E',
         transclude: true,
         template: '<div class="widget">' +
            '<div class="content" ng-transclude></div>' +
            '</div>',
         replace: true,
         link: function (scope, element, attrs) {
            element.prepend("<div class='title'>" + attrs.title + "</div>");
         }
      };
   });
