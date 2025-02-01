const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(cors({ origin: 'https://login-assinment-1o2z4yuz7-sreeja-sreenivasans-projects.vercel.app', credentials: true }));

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
