import Player from "../models/Player";

class PlayerController{
     
    /**
     * Create player into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req,res){
        let status=200;
        let body={};

        try {
            let player = await Player.create({
                namePlayer: req.body.namePlayer, 
                club: req.body.club,
                championnat: req.body.championnat,
                image: req.body.image,
                description: req.body.description
            });
            console.log("create player")

            body = {
                player,
                'message': 'player ok'
            };
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return res.status(status).json(body);
    }

    //Recupere la liste des player
    static async list(request,response){
       
        let status=200;
        let body={};

        try {
            let players = await Player.find();
            body={
                players, 
                'message':'List players'
            };

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);

    }

    //Recupere le detail d'un player avec l'id
    static async details ( request,response){
        let status=200;
        let body={};
        try {
            let id = {id: request.params.id};
            let player= await Player.findOne(id);
            body={player,'message': 'a player'}

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }

    //Supprime un player avec l'id
    static async delete(req, res){
        let status = 200;
        let body = {};

        try {            
            await Player.findOneAndRemove({_id: req.params.id});
            body = {
                'message': 'Player deleted'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Met a jour un player avec l'id
    static async update (request, response){
        let status=200; 
        let body={};
        try{
            let id = {id: request.params.id};  
            let player = await Player.findOne(id);
            await player.update(request.body);
            body={player, 'message':'player updated'};
        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }
}

export default PlayerController;