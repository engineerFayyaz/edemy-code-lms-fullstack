import { Sequelize } from 'sequelize';
import config from './config/database'; // Import your configuration

const env = process.env.NODE_ENV || 'development'; // Set your environment here

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: config[env].dialect,
    // Add other options if necessary
  }
);

// Define your Comment model here using Sequelize

export default sequelize;
