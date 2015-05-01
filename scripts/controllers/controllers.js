(function() {
    "use strict";

    app.controller('navigation', function($scope, navigationService) {
        $scope.navigations = [];

        init();

        function init() {
            $scope.navigations = navigationService.getNavigation();
        }
    });

    app.controller('homeInfoText', function($scope, $http, homePageInfo) {
        $scope.chart1Data = [];
        $scope.chart2Data = [];
        $scope.infoTexts = [];

        $scope.user = 'anongnito';
        $scope.repo = 'angularjs-project';
        init();

        function init() {
            $scope.infoTexts = homePageInfo.getInfoText();
            $scope.chart1Data = homePageInfo.getChart1Data();
            $scope.chart2Data = homePageInfo.getChart2Data();
        }

        var formatDates = function(data) {
            var isDuplicatedDate = "";
            var amount = 1;

            for(var d = new Date(2015, 1, 1); d <= new Date(2015, 12, 31); d.setDate(d.getDate() + 1)) {
                var loopDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

                for(var i = 0; i < data.length; i++) {

                    var fullDate = new Date(data[i].commit.author.date);
                    var dayOfMonth = fullDate.getDate();
                    var year = fullDate.getFullYear();
                    var month = fullDate.getMonth() + 1;
                    var initialDate = year + "-" + month + "-" + dayOfMonth;

                    if(loopDate == initialDate) {
                        if(isDuplicatedDate == initialDate) {
                            amount += 1;
                            isDuplicatedDate = year + "-" + month + "-" + dayOfMonth;
                            if(data.length - 2 == i) {
                                homePageInfo.setGitHubData({date: isDuplicatedDate, amount: amount});
                                amount = 1;
                            }
                        } else {
                            homePageInfo.setGitHubData({date: initialDate, amount: amount});
                            amount = 1;
                            isDuplicatedDate = year + "-" + month + "-" + dayOfMonth
                        }
                    } else {
                        homePageInfo.setGitHubData({date: loopDate, amount: 0})

                    }
                }
            }
            $scope.gitHubData = homePageInfo.getGitHubData();
        };

        $scope.getCommitData = function() {

            $http({
                method: 'GET',
                url: 'https://api.github.com/repos/' +
                $scope.user +
                '/' +
                $scope.repo +
                '/commits'
            }).
                success(function(data) {
                    $scope.data = formatDates(data);
                    // clear the error messages
                    $scope.error = '';
                }).
                error(function(data, status) {
                    if(status === 404) {
                        $scope.error = 'That repository does not exist';
                    } else {
                        $scope.error = 'Error: ' + status;
                    }
                });
        };
        $scope.getCommitData();
    });

    app.controller('about', function() {
        init();

        function init() {

        }
    });

    app.controller('contact', function($scope) {
        var fullMap,
            londonMap,
            leipzigMap,
            stockholmMap;

        var initializeMap =  {
            mapOptionsFullMap : {
                zoom: 4,
                center: new google.maps.LatLng(51.196283, 11.320633),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                draggable: false,
                panControl: false,
                zoomControl: false,
                scaleControl: false
            },
            mapOptionsStockholm : {
                zoom: 8,
                center: new google.maps.LatLng(59.332272, 18.069256),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                draggable: false,
                panControl: false,
                zoomControl: false,
                scaleControl: false
            },
            mapOptionsLeipzig : {
                zoom: 8,
                center: new google.maps.LatLng(51.328698, 12.394322),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                draggable: false,
                panControl: false,
                zoomControl: false,
                scaleControl: false
            },
            mapOptionsLondon : {
                zoom: 8,
                center: new google.maps.LatLng(51.560549, -0.118820),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                draggable: false,
                panControl: false,
                zoomControl: false,
                scaleControl: false
            },

            afterClickOptions : {
                scrollwheel: true,
                navigationControl: true,
                mapTypeControl: true,
                draggable: true,
                panControl: true,
                zoomControl: true,
                scaleControl: true
            },

            createMap: function () {
                fullMap = $scope.map = new google.maps.Map(document.getElementById('fullMap'), initializeMap.mapOptionsFullMap);
                stockholmMap = $scope.map = new google.maps.Map(document.getElementById('stockholmMap'), initializeMap.mapOptionsStockholm);
                leipzigMap = $scope.map = new google.maps.Map(document.getElementById('leipzigMap'), initializeMap.mapOptionsLeipzig);
                londonMap = $scope.map = new google.maps.Map(document.getElementById('londonMap'), initializeMap.mapOptionsLondon);

            }

        };
        init();
        function init() {
            initializeMap.createMap();
            google.maps.event.addListener(stockholmMap, 'click', function() {
                stockholmMap.setOptions(initializeMap.afterClickOptions)
            });
            google.maps.event.addListener(leipzigMap, 'click', function() {
                leipzigMap.setOptions(initializeMap.afterClickOptions)
            });
            google.maps.event.addListener(londonMap, 'click', function() {
                londonMap.setOptions(initializeMap.afterClickOptions)
            });
        }

    });

    app.controller('products', function() {
        init();

        function init() {

        }
    });
})();