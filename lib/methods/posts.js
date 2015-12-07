Meteor.methods({
    submitPost: function(post) {
        console.log(Meteor.user().emails[0].address);
        var additionalParams = {
            author: Meteor.user().emails[0].address,
            createdAt: new Date()
        }

        _.extend(post, additionalParams);
        post._id = Posts.insert(post);

        return post;
    },

    deletePost: function(id) {
        Posts.remove({_id:id});
    }
});