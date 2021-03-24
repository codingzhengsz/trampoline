const mongoose = require('mongoose')

let kittySchema = mongoose.Schema({
    name: String
})

kittySchema.methods.speak = function () {
    var greeting = this.name 
        ? 'Meow name is ' + this.name
        : "I don't have a name"
    return greeting 
}

mongoose.model('Kitten', kittySchema)

module.exports = mongoose.model('Kitten')