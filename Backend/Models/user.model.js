const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be 3 chaacters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [ 5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
       select: false,
    },
    socketId: {
        type: String
    }
});

userSchema.methods.generateAuthToken = function () {
const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, { expiresIn: '24h'});
return token;
}

//compare ou used an arrow function. Arrow functions don’t bind their own this, so this.password is undefined.
//That makes bcrypt receive password (the plain text) and undefined (instead of the hashed password), hence the error: data and hash arguments required
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;