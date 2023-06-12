const Mongoose = require('mongoose');
const cadSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
Mongoose.models = {};
module.exports = cadSchema;