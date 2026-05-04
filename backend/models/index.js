'use strict'

const Champion = require('./champion')
const User = require('./user')

async function init() {
    await Champion.sync()
    await User.sync()
}


init()

module.exports = {
    Champion, User
}