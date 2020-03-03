import mongoose from 'mongoose';

//Création du schema Place
const placeSchema = new mongoose.Schema({

    place: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
    
});

const Place = mongoose.model('Place', placeSchema);
export default Place;