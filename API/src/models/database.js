import mongoose from 'mongoose';

const connectDb = () => {
    let connection = null;

    //connection BDD qui a pour nom Egyptos
    connection = mongoose.connect(`mongodb://localhost:27017/Egyptos`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return connection;
}






export default {connectDb};