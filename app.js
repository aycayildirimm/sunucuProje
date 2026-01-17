const express = require('express');
const app = express();
const cors = require('cors'); // Import CORS
require('dotenv').config();

// Swagger Imports
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Middleware
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve frontend files

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Online Randevu ve Hizmet Yönetim Sistemi API',
            version: '1.0.0',
            description: 'Online Randevu ve Hizmet Yönetim Sistemi API Dokümantasyonu',
            contact: {
                name: 'Geliştirici',
                email: 'dev@example.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Import Routes
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/appointments', appointmentRoutes);

// Hardcoded Port 3000
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`CRITICAL ERROR: Port ${PORT} is already in use!`);
        console.error('Please stop the other process using this port and restart manually.');
        process.exit(1);
    } else {
        console.error(err);
    }
});
