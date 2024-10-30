const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');
require('dotenv').config();

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', profileRoutes);


app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
    
})