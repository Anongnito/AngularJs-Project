app.service('navigationService', function () {

    this.getNavigation = function() {
        return navigations;
    };

    var navigations = [
        {
            id: 1,
            name: 'newUser',
            link: '#/newUser'
        },
        {
            id: 2,
            name: 'existingUser',
            link: '#/existingUser'
        },
        {
            id: 3,
            name: 'cmsUser',
            link: '#/cmsUser'
        },
        {
            id: 4,
            name: 'adminUser',
            link: '#/adminUser'
        }
    ]
});