module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    userName: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    roleId: {
      type: Sequelize.STRING,
    },
    DOB: {
      type: Sequelize.STRING,
    },
    emailId: {
      type: Sequelize.STRING,
    },
    profilePic: {
      type: Sequelize.STRING,
    },
    status:{
      type: Sequelize.BOOLEAN,
    },
  });

  return User;
};
