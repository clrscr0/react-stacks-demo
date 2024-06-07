const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "test-user",
      password: "@test1.",
      database: "test",
      connectTimeout: 60000,
      multipleStatements: true
    },
    listPerPage: 10,
  };
  module.exports = config;