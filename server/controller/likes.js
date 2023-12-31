const { User } = require('../models/user');
const { Likes } = require('../models/likedParks');

module.exports = {
    likePark: async (req, res) => {
        try {
            const { name, states, description, status, userId} = req.body
            await Likes.create({name, states, description, privateStatus: status, userId})
            res.sendStatus(200);
        } catch (error) {
            console.log('ERROR IN getLikedParks')
            console.log(error)
            res.sendStatus(400)
        }
    },

    getLikedParks: async (req, res) => {
        try {
            const {userId} = req.params
            const likes = await Likes.findAll({
                where: {userId: userId},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]})
            res.status(200).send(likes)
        } catch (error) {
            console.log('ERROR IN getLikedParks')
            console.log(error)
            res.sendStatus(400)
        }
    },

    deleteLike: async (req, res) => {
        try {
            const {id} = req.params
            await Likes.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.group(error)
            res.sendStatus(400)
        }
    }
}