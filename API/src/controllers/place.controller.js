import Place from '../models/Place';
import User from '../models/User';

class PlaceController{

    /**
     * Create Place into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req, res){
        let status = 200;
        let body = {};

        try {    
            let place = await Place.create({
                place: req.body.place,
                image: req.body.image,
                description: req.body.description,
                userId: req.body.userId
            });

            body = {
                place, 
                'message': 'Place created'
            };
            
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Recupere la liste des places
    static async list(req, res){
        let status = 200;
        let body = {};

        try {            
            let places = await Place.find().populate('userId');

            body = {
                places, 
                'message': 'places list'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }
    
    //Recupere le detail d'un place avec l'id
    static async details(req, res){
        let status = 200;
        let body = {};

        try {            
            let id = req.parms.id;
            let places = await Place.findById(id);

            body = {
                places,
                'message': 'Places details'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Supprime un place avec l'id
    static async delete(req, res){
        let status = 200;
        let body = {};

        try {
            await Place.findOneAndRemove({_id:req.params.id});
            body = {
                'message': 'Place deleted'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Met a jour un place avec l'id
    static async update (req, res){
        let status=200; 
        let body={};
        try{
            let id = {id: req.params.id};  
            let place = await Place.findOne(id);
            await Place.update(req.body);
            body={
                place,
                 'message':'place updated'
                };
        }
        catch(error){
            status=500;
            body={
                'message': error.message
            }
        }
        return res.status(status).json(body);
    }

  

}

export default PlaceController;