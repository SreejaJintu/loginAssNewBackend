const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(cors({ origin: ['http://localhost:3000','https://loginassinmentnew.onrender.com'], credentials: true }));

app.use(express.json());

connectDB();
app.get('/', (req, res) => {
    res.send('server started');
});
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
