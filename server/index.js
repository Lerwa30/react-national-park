require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { sequelize } = require('./utility/database');
const { User } = require('./models/user');

const { login, register} = require('./controller/auth')

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env

app.post('/register', register);
app.post('/login', login);



sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`server running`))
})
.catch(err => console.log(err));

