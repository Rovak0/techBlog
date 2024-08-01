const sequelize = require('../config/connection');
const { User, Comment, Post} = require('../models');

const users = [
    {
        name: 'Tester',
        password: 'Testing'
    }
]

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const userInstances = await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });
}

seedDatabase();