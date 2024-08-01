const sequelize = require('../config/connection');
const { User, Comment, Post} = require('../models');

const users = [
    {
        name: 'Tester',
        password: 'Testing'
    }
]

const posts = [
    {
        text : 'My first post',
        user_id : 1
    }
]

const comments = [
    {
        text: 'First',
        user_id: 1,
        post_id: 1
    }
]

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const userInstances = await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });

    const postInstances = await Post.bulkCreate(posts,{
        individualHooks: true,
        returning: true,
    });

    const commentInstances = await Comment.bulkCreate(comments,{
        individualHooks: true,
        returning: true,
    });
}

seedDatabase();