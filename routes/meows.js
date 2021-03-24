const meows = require('../controllers/meows')

module.exports = (router) => {
    router.get('/meows', meows.getAll)
        .post('/meows', meows.postMeow)
}