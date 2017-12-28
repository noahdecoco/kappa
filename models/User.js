const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    // TODO: Casper
    /*
    emailId: String,
    hashedPassword: String,
    */
    displayName: String
});

mongoose.model('users', userSchema);
