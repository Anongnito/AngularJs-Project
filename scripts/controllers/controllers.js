(function() {
    "use strict";

    app.controller('navigation', function($scope, navigationService) {
        $scope.navigations = [];

        init();

        function init() {
            $scope.navigations = navigationService.getNavigation();
            $scope.shoppingCart = function() {
                console.log('opened')
                $scope.dynamicPopover = {

                    content: 'Hello, World!',
                    templateUrl: 'shoppingCart.html',
                    title: 'Title'
                };
            }
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

            var formatDates = function(data) {
                $scope.gitHubData = [];
                var isDuplicatedDate = "";
                var amount = 1;
                var shouldAddDate;

                for(var d = new Date(2015, 1, 1); d <= new Date(2015, 12, 31); d.setDate(d.getDate() + 1)) {
                    var loopDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
                    shouldAddDate = true;
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
                                    shouldAddDate = false;
                                }
                            } else {
                                homePageInfo.setGitHubData({date: initialDate, amount: amount});
                                amount = 1;
                                isDuplicatedDate = year + "-" + month + "-" + dayOfMonth;
                                shouldAddDate = false;
                            }
                        }
                    }
                    if(shouldAddDate == true) {
                        homePageInfo.setGitHubData({date: loopDate, amount: 0});
                    }
                }
                $scope.gitHubData = homePageInfo.getGitHubData();
                homePageInfo.clearGitHubData();
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
        }


    });

    app.controller('contact', function($scope, contact) {

        var fullMap,
            londonMap,
            leipzigMap,
            stockholmMap,
            marker;
        var infoWindow = new google.maps.InfoWindow();

        function init() {
            initializeMap.createMap();
            $scope.fullMapMarkers = contact.getFullMapMarkerData();
            $scope.londonMapMarkers = contact.getLondonMapMarkerData();
            $scope.leipzigMapMarkers = contact.getLeipzigMapMarkerData();
            $scope.stockholmMapMarkers = contact.getStockholmMapMarkerData();

            for(var i = 0; i < $scope.fullMapMarkers.length; i++) {
                initializeMap.createMarker($scope.fullMapMarkers[i], fullMap);
            }
            initializeMap.createMarker($scope.londonMapMarkers[0], londonMap);
            initializeMap.createMarker($scope.leipzigMapMarkers[0], leipzigMap);
            initializeMap.createMarker($scope.stockholmMapMarkers[0], stockholmMap);

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

        var initializeMap = {
            mapOptionsFullMap: {
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
            mapOptionsStockholm: {
                zoom: 15,
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
            mapOptionsLeipzig: {
                zoom: 15,
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
            mapOptionsLondon: {
                zoom: 15,
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

            afterClickOptions: {
                scrollwheel: true,
                navigationControl: true,
                mapTypeControl: true,
                draggable: true,
                panControl: true,
                zoomControl: true,
                scaleControl: true
            },

            fullMapStyles: [
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {"weight": 5},
                        {"visibility": "on"},
                        {"color": "#c39e6c"}
                    ]
                }, {
                    "featureType": "road",
                    "stylers": [
                        {"color": "#ceb874"}
                    ]
                }
            ],

            stockholmMapStyles: [
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {"weight": 5},
                        {"visibility": "on"},
                        {"color": "#635c38"}
                    ]
                }, {
                    "featureType": "water",
                    "stylers": [
                        {"visibility": "on"},
                        {"color": "#c6c581"}
                    ]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {"color": "#FFFFFF"}
                    ]
                }
            ],


            leipzigMapStyles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {"color": "#e9e9e9"}
                    ]
                }, {
                    "featureType": "road",
                    "stylers": [
                        {"color": "#b5b5b5"}
                    ]
                }, {
                    "featureType": "poi",
                    "stylers": [
                        {"color": "#e9e9e9"}
                    ]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {"color": "#FFFFFF"}
                    ]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {"color": "#000000"}
                    ]
                }
            ],

            londonMapStyles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {"saturation": 33},
                        {"gamma": 0.77},
                        {"hue": "#00ff66"}
                    ]
                }, {
                    "featureType": "road",
                    "stylers": [
                        {"hue": "#91ff00"},
                        {"visibility": "on"},
                        {"color": "#049256"},
                        {"weight": 0.5}
                    ]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {"color": "#ffffff"}
                    ]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {"color": "#808080"},
                        {"weight": 1.5}
                    ]
                }
            ],

            createMap: function() {
                fullMap = $scope.map = new google.maps.Map(document.getElementById('fullMap'), initializeMap.mapOptionsFullMap);
                stockholmMap = $scope.map = new google.maps.Map(document.getElementById('stockholmMap'), initializeMap.mapOptionsStockholm);
                leipzigMap = $scope.map = new google.maps.Map(document.getElementById('leipzigMap'), initializeMap.mapOptionsLeipzig);
                londonMap = $scope.map = new google.maps.Map(document.getElementById('londonMap'), initializeMap.mapOptionsLondon);
                fullMap.setOptions({styles: initializeMap.fullMapStyles});
                stockholmMap.setOptions({styles: initializeMap.stockholmMapStyles});
                leipzigMap.setOptions({styles: initializeMap.leipzigMapStyles});
                londonMap.setOptions({styles: initializeMap.londonMapStyles});
            },

            createMarker: function(data, map) {
                marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(data.lat, data.long),
                    title: data.city
                });
                marker.content = '<div class="infoWindowContent">' + data.desc + '</div>';

                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.setContent('<h2>' + this.title + '</h2>' + this.content);
                    infoWindow.open(map, this);
                });
            }
        };
        init();
    });


    app.controller('product', function($scope, products, $modal, $timeout) {
        $scope.products = [];
        $scope.myInterval = 3000;

        init();

        function init() {
            $scope.products = products.getProducts();
            $scope.selectedImageIndex = products.getSelectedIndex();
            $scope.selectedImageFunction = function(index) {
                products.setSelectedIndex(index);
            };
            $scope.open = function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: 'modal.html',
                    controller: 'modalCtrl'
                });
            };

            $scope.removeItemFromCart = function(index) {
                products.removeItemFromCart(index);
            };

            $scope.addItem = function() {
                $scope.selectedProduct = products.getProductByIndex($scope.selectedImageIndex);
                products.setItemsIntoCart($scope.selectedProduct);
                $timeout(openCart, 200);
            };

            $scope.total = function() {
                var total = 0;
                angular.forEach($scope.shoppingCart, function(product) {
                    total += product.productPrice;
                });

                return total;
            };

            $scope.shoppingCart = products.getItemsInCart();

            $scope.clearCart = function() {
                $scope.shoppingCart = products.clearShoppingCart();
                $scope.shoppingCart = products.getItemsInCart();
            };

            function openCart() {
                if($('.popover').length <= 0) {
                    $('.shoppingCartBtn').click();
                }
                $timeout(closeCart, 1000);
            }

            function closeCart() {
                if($('.popover').length > 0) {
                    $('.shoppingCartBtn').click();
                }
            }

            $scope.shoppingCartPopover = {
                templateUrl: 'shoppingCart.html',
                title: 'Shopping Cart'
            };
        }
    });

    app.controller('modalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };
    }]);

    app.controller('about', function($scope) {
        //do nothing
    });
    app.controller('errorCtrl', function($scope) {
        $scope.isLoggedIn = false;
    });

    app.controller('LoginModalCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function($scope, $rootScope, $location, AuthenticationService) {

            $scope.login = function() {

                AuthenticationService.Login($scope.username, $scope.password, function(response) {
                    if(response.success) {
                        $scope.cancel();
                        $location.path('/about');
                        $rootScope.isLoggedIn = response.isLoggedIn;
                    } else {
                        $scope.cancel();
                        $location.path('/errorView');
                        $rootScope.isLoggedIn = response.isLoggedIn;
                    }
                });
            };
            $scope.cancel = function() {
                $scope.$dismiss();
            };
            $scope.cancelRedirect = function() {
                $location.path('/');
                $scope.$dismiss();
            }

        }]);
})();