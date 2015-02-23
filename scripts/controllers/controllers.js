app.controller('navigation',function($scope, navigationService) {
    $scope.navigations = [];

    init();

    function init() {
        $scope.navigations = navigationService.getNavigation();
    }
});

app.controller('info', function ($scope, infoContentService) {
    $scope.infoTexts = [];
    init();

    function init() {
        $scope.infoTexts = infoContentService.getInfoText();
    }
});


app.controller('newUser', function ($scope) {
    init();

    function init() {

    }
});

app.controller('existingUser', function ($scope) {
    init();

    function init() {

    }
});

app.controller('cmsUser', function ($scope) {
    init();

    function init() {

    }
});

app.controller('adminUser', function ($scope) {
    init();

    function init() {

    }
});