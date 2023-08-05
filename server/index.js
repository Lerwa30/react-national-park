require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { login, register} = require('./controller/auth')

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env

app.post('/register', register);
app.post('/login', login);





app.listen(PORT, () => console.log(`server running`))