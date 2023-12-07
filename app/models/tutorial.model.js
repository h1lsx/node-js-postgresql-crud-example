module.exports = (sequelize, Sequelize) => {
  const Time = sequelize.define("time", {
    user: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    }
  });

  return Time;
};
