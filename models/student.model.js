const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    age: {type: Number, required: false},
});


// Export the model
module.exports = mongoose.model('Student', StudentSchema);