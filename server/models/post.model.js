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
        // .ENUM("available", "reserved", "collected"),
        // defaultValue: "available",
      },
    },
    { underscored: true }
  );

  return Post;
};
