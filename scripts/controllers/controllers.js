app.controller('navigation', function($scope, navigationService) {
    $scope.navigations = [];

    init();

    function init() {
        $scope.navigations = navigationService.getNavigation();
    }
});

app.controller('homeInfoText', function($scope, homePageInfo) {
    $scope.chart1Data = [];
    $scope.infoTexts = [];
    init();

    function init() {
        $scope.chart1Data = homePageInfo.getChart1Data();
        $scope.infoTexts = homePageInfo.getInfoText();

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

app.controller('d3', function($scope) {
    init();

    function init() {

    }
});