require('dotenv').config();
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const bcrypt = require('bcryptjs');


const createToken = (username, id) => {
    return jwt.sign({ username, id }, SECRET, { expiresIn: '1h'})
}

module.exports = {
    login: async (req, res) => {
        try {
            const {username, password} = req.body
            let foundUser = await User.findOne({where: {username}})
            if (foundUser) {
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if (isAuthenticated) {
                    const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)
                    const exp = Date.now() + 1000 * 60 * 60 * 48
                    res.status(200).send({
                        username: foundUser.dataValues.username, 
                        userId: foundUser.dataValues.id,
                        token, 
                        exp
                    })
                } else {
                    res.status(400).send('cannot log in')
                }

            } else {
                res.status(400).send('cannot log in')
            }
        } catch (error) {
            console.log('ERROR IN register')
            console.log(error)
            res.sendStatus(400)
        }
    },

    logout: async (req, res) => {
        try {
            localStorage.removeItem('authToken');
            res.status(200).send('Logged out successfully');

            // const token = req.headers.authorization.split('')[1];
            // const decodedToken = jwt.verify(token, SECRET);
            // const userId = decodedToken.userId;
            // await User.update({ token: null }, { where: { id: userId }});
            // res.status(200).send('Logged out successfully');
        } catch (err) {
            console.log('Error in logout');
            console.log(err)
            res.sendStatus(500)
        }
    },

    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            const foundUser = await User.findOne({where: {username: username}})
            if (foundUser) {
                res.status(400).send('Username already taken!')
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                const newUser = await User.create({username: username, hashedPass: hash});
                const token = createToken(newUser.dataValues.id, newUser.dataValues.username);
                console.log(newUser);
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp,
                  });
            }
        } catch (err) {
            console.log(err);
        }
    }
}


