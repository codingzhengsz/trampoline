const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const Mongoose = require('mongoose')
const Routes = require('./routes')

const mongooseOptions = {
    useNewUrlParser: true
}

Mongoose.connect('mongodb://Wuhu:123456@192.168.31.58:27017/trampoline?authSource=admin', mongooseOptions)

const app = new Koa()
const router = new Router()

Routes(router)

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods()).listen(3000)