const User = require('./users');
const Comment = require('./comments');
const Post = require('./posts');

//a user can have many posts and comments
    //but 1 user per post/comment

//a post can have many comments
//a comment can have 1 post

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: 'CASCADE'
});


module.exports = { Comment , User, Post};