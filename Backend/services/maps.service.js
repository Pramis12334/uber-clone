const axios = require('axios');
const { validationResult } = require('express-validator');

module.exports.getAddressCoordinate= async (address)=>{
    if(!address) {
        throw new Error('Address is required');
    }
const apikey = process.env.GOOGLE_MAPS_API;
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;
try{
    const response = await axios.get(url);
    if(response.data.status === 'OK' ) {
        const location = response.data.results[ 0 ].geometry.location;
        return {
            ltd: location.lat,
            lng: location.lng
        };
    } else {
        throw new Error('Unable to fetch coordinates');
    }
     
} catch (err){
console.error(err);
throw err;

}
}

module.exports.getDistanceTime = async(origin, destination) =>{
    const errors = validationResult(req);
    if(!origin || !destination) {
        throw new Error('Origin and Destination are required');
    }

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK') {

        if(response.data.row[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS')  {
                throw new Error('NO routes found');
        }
        return response.data.rows[ 0 ].elements[ 0 ];
    } else {
    throw new Error('Unable to fetch distance and time');
    }

    } catch (err) {
        console.error(err);
        throw err;
    }


}

module.exports.getAutoCompleteSuggestions= async (input) =>{
const errors = validationResult(req);
if(!input) {
    throw new Error('query is required');
}

const apikey = process.env.GOOGLE_MAPS_API;
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;

try{
    const response = await axios.get(url);
    if(response.data.status === 'OK') {
        return response.data.predictions;
    } else {
        throw new Error('Unable to fetch suggestions');
    }
}catch(err){
    console.error(err);
    throw err;
}
}