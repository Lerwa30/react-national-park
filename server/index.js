require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { sequelize } = require('./utility/database');
const { User } = require('./models/user');
const { isAuthenticated } = require('./middleware/isAuthenticated');
const { login, register, logout } = require('./controller/auth');
const { likePark, getLikedParks } = require('./controller/likes');
const { Likes } = require('./models/likedParks');

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Likes);
Likes.belongsTo(User);

app.post('/register', register);
app.post('/login', login);
app.delete('/logout', logout);

app.post('/likes', likePark);
app.get('/userlikes/:userId', getLikedParks);


const { PORT } = process.env


sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`server running`))
})
.catch(err => console.log(err));

