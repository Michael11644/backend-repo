// migrations/YYYYMMDDHHMMSS-add-task-columns.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tasks', 'priority', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Tasks', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tasks', 'priority');
    await queryInterface.removeColumn('Tasks', 'status');
  }
};

