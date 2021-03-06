Router.configure({
    loadingTemplate: 'spinner',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController'
});

Router.route('/new', {
    name: 'newPost',
    controller: 'BaseController'
});

Router.route('/blog', {
    name: 'blog',
    controller: 'BlogPageController'
});

Router.route('/about', {
    name: 'about',
    controller: 'BaseController'
});

Router.route('/post/:_id', {
    name: 'singlePost',
    controller: 'SinglePostController'
});

Router.route('/edit/:_id', {
    name: 'editPost',
    controller: 'EditPostController'
});

Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}, {only: 'newPost'});