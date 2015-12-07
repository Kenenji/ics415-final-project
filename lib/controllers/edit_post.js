EditPostController = BaseController.extend({
    template: 'editPost',

    waitOn: function(){
        return Meteor.subscribe('singlePost', this.params._id);
    },

    data: function() {
        return Posts.findOne(this.params._id);
    }
});