module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
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
        type: Sequelize.ENUM("Available", "Reserved", "Collected"),
        defaultValue: "Available",
      },
    },
    { underscored: true }
  );

  return Post;
};
