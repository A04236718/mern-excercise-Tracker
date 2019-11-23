const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true, // whitespace is trimmed off the end
        minlength:3
    },
}, { 
    timestamps: true,
});


// Be our export variable to export access to the schema
const User = mongoose.model('User', userSchema);

module.exports = User;