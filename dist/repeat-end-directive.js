'use strict';
angular.module('evtrs.repeatend', [])
    .directive('repeatEnd', function () {
        return {
            restrict : 'A',
            link: function(scope, element, attrs) {
                if (scope.$last) {
                    setTimeout(function () {
                        scope.$emit(attrs.repeatEnd);
                    }, 1);
                }
            }
        };
    });