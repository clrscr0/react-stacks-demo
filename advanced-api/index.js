const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3002;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Your generated Swagger spec

app.use("/languages", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// Serve Swagger UI at index
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});