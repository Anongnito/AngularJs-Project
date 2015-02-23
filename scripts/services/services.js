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
            name: 'Existing User',
            link: '#/existingUser'
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
            id: 'existingUserInfo',
            contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis neque. Suspendisse et sem eget justo hendrerit venenatis. Curabitur quis convallis nulla. Ut nec arcu ac purus tristique fermentum. Suspendisse sit amet elit nec magna dictum aliquam at ac dolor',
            title: 'Existing User Info'
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