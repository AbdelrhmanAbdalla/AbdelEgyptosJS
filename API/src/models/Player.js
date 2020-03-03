import mongoose from 'mongoose';

//Création du schema Player
const playerSchema = new mongoose.Schema({
    
    namePlayer: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    championnat: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

});

const Player = mongoose.model('Player', playerSchema); 
export default Player;