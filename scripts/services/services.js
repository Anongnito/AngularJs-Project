(function() {
    "use strict";

    app.service('navigationService', function() {
        this.getNavigation = function() {
            return navigations;
        };

        var navigations = [
            {
                id: 0,
                name: 'Home',
                link: '#/'
            },
            {
                id: 1,
                name: 'Products',
                link: '#/products'
            },
            {
                id: 2,
                name: 'About Us',
                link: '#/about'
            },
            {
                id: 3,
                name: 'Contact',
                link: '#/contact'
            }
        ]
    });

    app.service('homePageInfo', function() {
        this.getInfoText = function() {
            return infoTexts;
        };
        this.getChart1Data = function() {
            return chart1Data;
        };
        this.getChart2Data = function() {
            return chart2Data;
        };
        this.getGitHubData = function() {
            return gitHubData;
        };
        this.setGitHubData = function(data) {
            gitHubData.push(data);
        };
        this.clearGitHubData = function() {
            gitHubData = [];
        };

        var infoTexts = [
            {
                id: 'allYourMoney',
                title: 'We will take all your money!',
                image: '../img/money-bag-5-128x128.png',
                paragraph: 'Does not matter if you pay 1£ or 1000£, we will take it all. Make sure you are 100% sure you want to buy our products.'
            },
            {
                id: 'noItems',
                title: 'You will not receive your items!',
                image: '../img/bag-8-128x128.png',
                paragraph: 'We apologize, but we are too lazy to post your items. Actually, we do not even have any products - images on the site are fake!'
            },
            {
                id: 'noShop',
                title: 'No shop where you can complain!',
                image: '../img/shop-5-128x128.png',
                paragraph: 'We will not post our number, email and we have no office or shop where you can complain and/or scream at us. It is your fault.'
            }
        ];

        var chart1Data = [10, 20, 30, 40, 60, 80, 60, 90];
        var chart2Data = [
            {title: 'Happy Customers', value: 50},
            {title: 'Unhappy Customers', value: 10},
            {title: 'Neutral Customers', value: 20}
        ];
        var gitHubData = [];


    });

    app.service('contact', function() {
        this.getFullMapMarkerData = function() {
            return fullMapMarkers;
        };
        this.getLondonMapMarkerData = function() {
            return londonMapMarkers;
        };
        this.getLeipzigMapMarkerData = function() {
            return leipzigMapMarkers;
        };
        this.getStockholmMapMarkerData = function() {
            return stockholmMapMarkers;
        };

        var fullMapMarkers = [
            {
                city: 'London',
                desc: 'Here we have our biggest office. We wont tell you the address, find it yourself.',
                lat: 51.560549,
                long: -0.118820
            },
            {
                city: 'Stockholm',
                desc: 'Actually, we do not have an office here, but you can make your own!',
                lat: 59.332272,
                long: 18.069256
            },
            {
                city: 'Leipzig',
                desc: 'No clue what is going on there.',
                lat: 51.328698,
                long: 12.394322
            }
        ];
        var londonMapMarkers = [
            {
                city: 'London',
                desc: 'That is exactly where our office is not located, trust us.',
                lat: 51.560549,
                long: -0.118820
            }
        ];
        var leipzigMapMarkers = [
            {
                city: 'Leipzig',
                desc: 'Oh we just went camping there once and we got arrested because we were tenting in the park',
                lat: 51.328698,
                long: 12.394322
            }
        ];
        var stockholmMapMarkers = [
            {
                city: 'Stockholm',
                desc: 'This empty space is ours, or yours, who knows? First come, first served.',
                lat: 59.332272,
                long: 18.069256
            }
        ]
    });

    app.service('products', function() {
        this.getProducts = function() {
            return products;
        };
        this.getSelectedIndex = function() {
            return selectedIndex;
        };
        this.setSelectedIndex = function(index) {
            selectedIndex = index;
        };
        this.getItemsInCart = function() {
            return shoppingCart;
        };
        this.setItemsIntoCart = function(items) {
            shoppingCart.push(items);
        };
        this.getProductByIndex = function(index) {
            return products[index];
        };
        var products = [
            {
                id: 0,
                productName: 'Woman Vintage Shirt 1',
                productPrice: 999.99,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/WomanShirt1.jpg'

            },
            {
                id: 1,
                productName: 'Woman Vintage Shirt 2',
                productPrice: 2.59,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/WomanShirt2.jpg'

            },
            {
                id: 2,
                productName: 'Woman Super Vintage Pants 1',
                productPrice: 56.99,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/WomanPants1.jpg'

            },
            {
                id: 3,
                productName: 'Woman Super Vintage Shirt 2',
                productPrice: 22.99,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/WomanPants2.jpg'

            },
            {
                id: 4,
                productName: 'T-Shirt a man would never wear!',
                productPrice: 663.99,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/ManShirt1.jpg'

            },
            {
                id: 5,
                productName: 'Really? A pink ..thing?',
                productPrice: 1.99,
                productDescription: 'Yo! This shirt will blow your socks off! Oh wait, you are a hipster, you have no socks to begin with!',
                image: '../img/ecommerce/ManShirt2.jpg'

            },
            {
                id: 6,
                productName: 'No Title',
                productPrice: 9999.99,
                productDescription: 'We have no description for this, we have no clue what this is or what it is supppose to be.',
                image: '../img/ecommerce/noClue.jpg'

            },
            {
                id: 7,
                productName: 'Baseball Shirt',
                productPrice: 0.4,
                productDescription: 'With this shirt, you become a superstar baseball player instantly',
                image: '../img/ecommerce/baseballShirt.jpg'

            }

        ];

        var selectedIndex = 0;

        var shoppingCart = [];
    });

    app.service('shoppingCart', function() {

    });

})();