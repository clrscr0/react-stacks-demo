const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My awesome API documentation',
        },
    },
    apis: ['./routes/*.js'], // Specify the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;