const Kitten = require('../models/kitty')

let controllers = {
    getAll: async (ctx) => {
        const meows = await Kitten.find({}).exec()
        for (let i = 0; i < meows.length; i++) {
            meows[i] = meows[i].speak()
        }
        ctx.body = meows
    },
    postMeow: async(ctx) => {
        let meow = new Kitten({
            name: ctx.request.body.name
        })
        await meow.save()
        ctx.body = 'Create success'
        ctx.status = 201
    }
}

module.exports = controllers
