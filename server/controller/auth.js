require('dotenv').config();
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const bcrypt = require('bcryptjs');


const createToken = (username, id) => {
    return jwt.sign({ username, id }, SECRET, { expiresIn: '2 days'})
}

module.exports = {
    login: async (req, res) => {
        let { username, password } = req.body;
        const token = createToken(username, password)
        res.sendStatus(200).send(token);
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


