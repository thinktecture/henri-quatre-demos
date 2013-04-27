'use strict';

var app = angular.module('signalRIntegrationApp', []);
app.value('signalRServer', 'http://henriquatreserver.azurewebsites.net/');

/* Embedded Fragment - controller */

function ServerTimeController($scope, signalRHubProxy) {
    var clientPushHubProxy = signalRHubProxy(signalRHubProxy.defaultServer, 'clientPushHub', { logging: true });
    var serverTimeHubProxy = signalRHubProxy(signalRHubProxy.defaultServer, 'serverTimeHub');

    clientPushHubProxy.on('serverTime', function (data) {
        $scope.currentServerTime = data;
        var x = clientPushHubProxy.connection.id;
    });
    
    $scope.getServerTime = function () {
        serverTimeHubProxy.invoke('getServerTime', function (data) {
            $scope.currentServerTimeManually = data;
        });
    };
};

/* Fragment End - controller */

function PerformanceDataController($scope, signalRHubProxy) {
    var performanceDataHub = signalRHubProxy(signalRHubProxy.defaultServer, 'performanceDataHub');
    
    performanceDataHub.on('newCpuDataValue', function (data) {
        $scope.cpuData = data;
    });
};

app.directive('smoothieChart', function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        template: '<canvas>Your browser does not support the HTML 5 canvas element.</canvas>',
        link: function (scope, elem, attrs) {
            var values = new TimeSeries();
            var chart = new SmoothieChart();
            chart.addTimeSeries(values, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
            chart.streamTo(elem[0], 1000);

            scope.$watch(attrs.data, function (newScopeData) {
                values.append(new Date().getTime(), parseFloat(newScopeData));
            });
        }
    };
});


app.factory('signalRHubProxy', ['$rootScope', 'signalRServer', function ($rootScope, signalRServer) {
    function signalRHubProxyFactory(serverUrl, hubName, startOptions) {
        var connection = $.hubConnection(signalRServer);
        var proxy = connection.createHubProxy(hubName);
        connection.start(startOptions).done(function () { });
        
        return {
            on: function (eventName, callback) {
                proxy.on(eventName, function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                });
            },
            off: function (eventName, callback) {
                proxy.off(eventName, function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                });
            },
            invoke: function (methodName, callback) {
                proxy.invoke(methodName)
                    .done(function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    });
            },
            connection: connection
        };
    };

    return signalRHubProxyFactory;    
}]);
