import SpecUtils from './utils'

const io = require(__dirname + '/../../src/index.js')

io.init()

// simple timeout to make event loop working
// after 1 seconds this script should exit
const timer = setTimeout(function () {
  io.destroy()
  clearTimeout(timer)
}, 200)
