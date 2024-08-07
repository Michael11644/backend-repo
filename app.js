const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/employees', require('./routes/employees'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});

module.exports = app;

