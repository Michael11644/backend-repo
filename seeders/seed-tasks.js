// seeders/seed-tasks.js
const { Task } = require('../models');

const tasks = [
  {
    description: 'delectus autem',
    priority: 'high',
    status: 'in progress',
    employeeId: 1,
  },
  {
    description: 'quis ut nam facilis et officia qui',
    priority: 'low',
    status: 'completed',
    employeeId: 2,
  },
  {
    description: 'fugiat veniam minus',
    priority: 'medium',
    status: 'not started',
    employeeId: null,
  },
  {
    description: 'et porro tempora',
    priority: 'high',
    status: 'in progress',
    employeeId: 3,
  },
];

const seedTasks = async () => {
  try {
    for (const task of tasks) {
      await Task.create(task);
    }
    console.log('Tasks have been seeded!');
  } catch (error) {
    console.error('Error seeding tasks:', error);
  }
};

seedTasks();
