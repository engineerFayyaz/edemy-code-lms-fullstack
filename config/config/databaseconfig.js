const databaseConfig = {
    development: {
      database: 'dh7oh1mmttobv',
      username: 'lgsxajzhwzreut',
      password: '31efecafaa4baa1019a1b805e83c4ffd54e6db605f9362fc0ea3566c7e06f9ce',
      host: 'ec2-35-169-9-79.compute-1.amazonaws.com',
      dialect: 'postgres' // Assuming you're using PostgreSQL locally
    },
    production: {
      use_env_variable: 'postgres://lgsxajzhwzreut:31efecafaa4baa1019a1b805e83c4ffd54e6db605f9362fc0ea3566c7e06f9ce@ec2-35-169-9-79.compute-1.amazonaws.com:5432/dh7oh1mmttobv',
      dialect: 'postgres', // Assuming you're using PostgreSQL on Heroku
      ssl: true, // Enable SSL to connect to Heroku Postgres
      dialectOptions: {
        ssl: {
          require: true
        }
      }
    }
  };
  
  export default databaseConfig;
  