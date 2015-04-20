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
        $scope.gitHubData = [];

        $scope.user = 'anongnito';
        $scope.repo = 'angularjs-project';
        init();

        function init() {

            $scope.infoTexts = homePageInfo.getInfoText();
            $scope.chart1Data = homePageInfo.getChart1Data();
            $scope.chart2Data = homePageInfo.getChart2Data();
            getCommitData();
        }


        var formatDates = function(data) {
            for(var i = 0; i < data.length - 1; i++) {

                var fullDate = new Date(data[i].commit.author.date);
                var dayOfMonth = fullDate.getDate();
                var day = fullDate.getDay();
                var month = fullDate.getMonth();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                    "Sunday"
                ];

                $scope.gitHubData.push(dayOfMonth + " " + monthNames[month] + " " + dayNames[day])

            }
            return $scope.gitHubData;
        };

        function getCommitData() {

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
        }
    });

    app.controller('about', function() {
        init();

        function init() {

        }
    });

    app.controller('contact', function() {
        init();

        function init() {

        }
    });

    app.controller('products', function() {
        init();

        function init() {

        }
    });
})();