var mongoose = require('mongoose')
mongoose.connect('mongodb://sen:123456@ds147979.mlab.com:47979/cys-blog')
mongoose.Promise = global.Promise
module.exports = mongoose
