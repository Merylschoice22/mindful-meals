module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    // },
    // users_id: {
    //   type: Sequelize.INTEGER,
    // },
    date: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    loc_barrio: {
      type: Sequelize.STRING,
    },
    loc_street: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Post;
};
