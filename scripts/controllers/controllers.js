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


app.controller('newUser', function ($scope, newUserImageContentService) {
    $scope.imageContent = [];
    init();

    function init() {
        $scope.imageContent = newUserImageContentService.getImageContent();
    }
});

app.controller('returningUser', function ($scope, returningUserImageContentService, newUserImageContentService) {
    $scope.imageContent = [];
    init();

    function init() {
        //document.cookie="returningVisitor=returning visitor; path=/";
        if( document.cookie.indexOf('returning visitor') > 0) {
            $scope.imageContent = returningUserImageContentService.getImageContent();
        }else {
            $scope.imageContent = newUserImageContentService.getImageContent();
        }
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