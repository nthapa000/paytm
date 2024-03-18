const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KmCihXn0l1podXRj@cluster0.9gr3ic2.mongodb.net/')

// create a schema for Users table
const UserSchema = new mongoose.Schema({
    username: String,
    fastName: String,
    lastName: String,
    password: String
})

// Create a model from the schema
const User = mongoose.model('User', UserSchema);
module.exports= {
    User
};