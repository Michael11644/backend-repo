'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.STRING,
    priorityLevel: DataTypes.STRING,
    completionStatus: DataTypes.BOOLEAN,
    employeeId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'employee'
    });
  };
  return Task;
};
