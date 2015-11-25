Meteor.methods({
    submitPost: function(post) {

        var additionalParams = {
            author: 'Author',
            createdAt: new Date()
        }

        _.extend(post, additionalParams);
        post._id = Posts.insert(post);

        return post;
    }
});