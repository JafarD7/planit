const mongoose = require('mongoose')
const { Schema } = mongoose;


const orderschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    eventdata: {
        type: Array,
        required: true,

    }
});


var Order = mongoose.model('Order', orderschema);
module.exports = Order;
