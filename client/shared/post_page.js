Template.postPage.events ({
    'click .delete': function (event, item) {
        event.preventDefault();
        Meteor.call('deletePost', item.data._id);
        Router.go('blog');
    }
})

Template.postPage.helpers ({
    isauthor : function () {
        //console.log(this);
        var user = Meteor.user().emails[0].address;
        var author = this.author;
        //console.log(author === user);
        return author === user;
    }
})

Template.editPost.events ({
    'submit' : function (event, item) {
        //console.log(item);
        var id = item.data._id;
        Router.go('/post/'+id);
    }
})

Template.newPost.events ({
    'submit' : function (event, item) {
        Router.go('/blog');
    }
})


