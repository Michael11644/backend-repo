const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the CORS package
const { sequelize } = require('./models');  // Import your Sequelize instance

const app = express();

app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

// Define your routes
app.use('/api/employees', require('./routes/employees'));
app.use('/api/tasks', require('./routes/tasks'));

const startServer = async () => {
  try {
    // Authenticate and connect to the database
    await sequelize.authenticate();
    console.log('Database connected!');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Start the server
startServer();

module.exports = app;

