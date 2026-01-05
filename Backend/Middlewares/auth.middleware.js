const userModel = require('../Models/user.model');
const blacklistTokenModel = require('../Models/blacklistToken.model');
const captainModel = require('../Models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async function(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if(isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
  
        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({message: 'Unauthorized' });
    }

}

module.exports.authCaptain = async function(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    
    if(!token) {
        res.status(401).json({ message: 'Unauthorized'});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if(isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next();

    } catch (err) {
        return res.status(400).json({ message: 'Unauthorized' });
    }
}