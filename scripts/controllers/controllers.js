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