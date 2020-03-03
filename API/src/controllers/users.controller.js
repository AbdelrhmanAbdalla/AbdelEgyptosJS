import User from '../models/User';
import jwt from 'jsonwebtoken';

class UserController{

    /**
     * Create User into Database
     * @param {Request} req 
     * @param {Response} res
     */
    static async create(req, res){
        let status = 200;
        let body = {};

        try {
            
            let user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                user_role: req.body.user_role

            });

            body = {
                user, 
                'message': 'User created'
            };
            
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Connexion de l'utilsateur ou admin et verif email et password
    static async auth(req, res){
        let status = 200;
        let body = {};
        try {
            
            let user = await  User.findOne({email: req.body.email});

            if(user && user.password === req.body.password){
                let token = jwt.sign({sub: user._id}, "monsecret");
                body = {
                    user, 
                    token,
                    'message': 'User auth'
                };
            }else{
                status = 401
                body = {
                    'message': 'Error email / password '
                }
            }   
            
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
        
    }

    //Recupere la liste des users
    static async list(req, res){
        let status = 200;
        let body = {};

        try {            
            let users = await User.find();

            body = {
                users, 
                'message': 'Users list'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Recupere le detail d'un player avec l'id
    static async details(req, res){
        let status = 200;
        let body = {};

        try {            
            let id = req.params.id;
            let users = await User.findById(id);

            body = {
                users, 
                'message': 'Users details'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};  
        }
        return res.status(status).json(body);
    }

    //Supprime un user avec l'id
    static async delete(req, res){
        let status = 200;
        let body = {};

        try {            
            await User.findOneAndRemove({_id: req.params.id});
            body = {
                'message': 'User deleted'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //Met a jour un user avec l'id
    static async update(req, res){
        let status = 200;
        let body = {};

        try {            
            await User.findByIdAndUpdate(req.params.id,{$set: req.body});
            body = {
                'message': 'User updated'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

}

export default UserController;