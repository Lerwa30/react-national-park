require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { sequelize } = require('./utility/database');
const { User } = require('./models/user');
const { isAuthenticated } = require('./middleware/isAuthenticated');
const { login, register} = require('./controller/auth')

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', register);
app.post('/login', login);

const { PORT } = process.env


sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`server running`))
})
.catch(err => console.log(err));

