// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/info', (req, res) => {
    res.json({
        data: {
            fullName: "Cao Trung Hoan",
            studentCode: "QE170187"
        }
    });
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});