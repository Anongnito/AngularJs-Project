app.service('navigationService', function () {
    this.getNavigation = function () {
        return navigations;
    };

    var navigations = [
        {
            id: 0,
            name: 'Info Page',
            link: '#/info'
        },
        {
            id: 1,
            name: 'New User',
            link: '#/newUser'
        },
        {
            id: 2,
            name: 'Returning User',
            link: '#/returningUser'
        },
        {
            id: 3,
            name: 'CMS User',
            link: '#/cmsUser'
        },
        {
            id: 4,
            name: 'Admin User',
            link: '#/adminUser'
        }
    ]
});

app.service('infoContentService', function () {
    this.getInfoText = function () {
        return infoTexts;
    };

    var infoTexts = [
        {
            id: 'newUserInfo',
            contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis neque. Suspendisse et sem eget justo hendrerit venenatis. Curabitur quis convallis nulla. Ut nec arcu ac purus tristique fermentum. Suspendisse sit amet elit nec magna dictum aliquam at ac dolor',
            title: 'New User Info'
        },
        {
            id: 'returningUserInfo',
            contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis neque. Suspendisse et sem eget justo hendrerit venenatis. Curabitur quis convallis nulla. Ut nec arcu ac purus tristique fermentum. Suspendisse sit amet elit nec magna dictum aliquam at ac dolor',
            title: 'Returning User Info'
        },
        {
            id: 'cmsUserInfo',
            contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis neque. Suspendisse et sem eget justo hendrerit venenatis. Curabitur quis convallis nulla. Ut nec arcu ac purus tristique fermentum. Suspendisse sit amet elit nec magna dictum aliquam at ac dolor',
            title: 'CMS User Info'
        },
        {
            id: 'adminUserInfo',
            contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis neque. Suspendisse et sem eget justo hendrerit venenatis. Curabitur quis convallis nulla. Ut nec arcu ac purus tristique fermentum. Suspendisse sit amet elit nec magna dictum aliquam at ac dolor',
            title: 'Admin User Info'
        }
    ]
});

app.service('newUserImageContentService', function() {
   this.getImageContent = function () {
       return imageContent;
   };

    var imageContent = [
        {
            id: 1,
            name: 'Tablets',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-1.jpg',
            description: 'Click here to view our selection of Tablets and Surfaces.'
        },
        {
            id: 2,
            name: 'DJ Equipment',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-2.jpg',
            description: 'DJ Equipment from near and far!'
        },
        {
            id: 3,
            name: 'Headphones',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-5.jpg',
            description: 'Bang-For-Buck HI-FI headphones!'
        },
        {
            id: 4,
            name: 'Flat Screens',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-9.jpg',
            description: 'Fancy a 48 inch screen? We have you covered!'
        },
        {
            id: 5,
            name: 'DIY Electronics',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-4.jpg',
            description: 'DIY fanatic? We have everything.'
        },
        {
            id: 6,
            name: 'Laptops',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-3.jpg',
            description: 'New and used laptops.'
        }
    ]
});

app.service('returningUserImageContentService', function() {
    this.getImageContent = function () {
        return imageContent;
    };

    var imageContent = [
        {
            id: 1,
            name: 'Chicken Stew',
            url: 'http://lorempixel.com/output/food-q-c-640-480-1.jpg',
            description: 'You know have access to Chicken Stew.'
        },
        {
            id: 2,
            name: 'Vegetables',
            url: 'http://lorempixel.com/output/food-q-c-640-480-5.jpg',
            description: 'Jummy fresh veggies - 5 a day!'
        },
        {
            id: 3,
            name: 'Bread',
            url: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
            description: 'Fresh gluten-free bread, right here, right now!'
        },
        {
            id: 4,
            name: 'Flat Screens',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-9.jpg',
            description: 'Fancy a 48 inch screen? We have you covered!'
        },
        {
            id: 5,
            name: 'DIY Electronics',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-4.jpg',
            description: 'DIY fanatic? We have everything.'
        },
        {
            id: 6,
            name: 'Laptops',
            url: 'http://lorempixel.com/output/technics-q-c-640-480-3.jpg',
            description: 'New and used laptops.'
        }
    ]
});