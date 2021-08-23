module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      post_date: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
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
        defaultValue: "available",
      },
      reserved_by_user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    },
    { underscored: true }
  );

  return Post;
};
