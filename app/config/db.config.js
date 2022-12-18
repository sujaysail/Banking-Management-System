module.exports = {
    HOST: "localhost",
    PORT: "5432",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "cmsdb",
    dialect: "postgres",
    schema: "bankms",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };