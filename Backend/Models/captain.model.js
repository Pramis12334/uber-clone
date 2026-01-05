const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
fullname: {
    firstname: {
        type: String,
        required: true,
        minlength:[3, 'firstname muts be 3 character long.']
    },
    lastname: {
        type: String,
        minlength:[3, 'lastname must be 3 character long.']
    }
},
email: {
    type: String,
    required:true,
    unique: true,
    lowercase: true
},
password: {
    type: String,
    select: false,
    required: true
},
socketId: {
    type: String
},
status: {
    type: String,
    enum: [ 'active', 'inactive' ],
    default: 'inactive',
},
vehicle: {
    color: {
        type: String,
        required: true,
        minlength: [3, 'Color must be at least 3 character long.'],
    },
    plate: {
        type: String,
        required: true,
        minlength: [ 3,'Plate must be at least 3 character long.'],
    },
    capacity: {
        type: Number,
        required: true,
        min: [ 1,'Capacity must be at least 1'],
    },
    vehicleType: {
        type: String,
        required: true,
        enum: [ 'car', 'motorcycle', 'auto' ], 
    }
},
location: {
lat: {
    type: Number,
},
long:{
    type: Number,
}
}
});

captainSchema.methods.generateAuthToken = function () {
const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, { expiresIn: '24h'});
return token;
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;