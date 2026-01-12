const mapService = require('./maps.service');
const rideModel = require('../Models/ride.model');

async function getfare(pickup, destination) {
    if(!pickup || !destination) {
        return res.status(400).json({ message: 'Invalid credential'});
    }
    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20
    };
    const perKmRate = {
        auto: 10,
        car: 15,
        motorcycle: 8
    };
    const perMinuteRate = {
        auto: 2,
        car: 3,
        motorcycle: 1.5
    };
    const fare = {
        auto: baseFare.auto + (distanceTime.distance * perKmRate.auto * perMinuteRate.auto),
        car: baseFare.car + (distanceTime.distance * perKmRate.car * perMinuteRate.car),
        motorcycle: baseFare.motorcycle + (distanceTime.distance * perKmRate.motorcycle * perMinuteRate.motorcycle)
    };
    return fare;
}

module.exports.createRide = async ({
user, pickup, destination, vehicleType
}) => {
     if(!user || !pickup || !destination || !vehicleType) {
        return res.status(400).json({ message: 'All field are required'});
     }
     const fare = await getfare(pickup, destination);
     const ride = {
        user,
        pickup,
        destination,
        fare: fare [ vehicleType ]
     };

     return ride;
};