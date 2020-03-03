import { Router } from 'express';
import UserController from '../controllers/users.controller';
import PlaceController from '../controllers/place.controller';
import PlayerController from '../controllers/player.controller';

const router = Router();

//ROUTER

//GET, POST, PUT, DELETE, 

router.get('/test', function(req, res){
    res.send("test");
});

//Users routes
router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.post('/users/authenticate', UserController.auth);
router.get('/users/:id', UserController.details);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

//Places routes
router.post('/places', PlaceController.create);
router.get('/places', PlaceController.list);
router.delete('/places/:id', PlaceController.delete);
router.get('/places/:id', PlaceController.details);
router.put('/places/:id', PlaceController.update);

//Players routes
router.post('/players', PlayerController.create);
router.get('/players', PlayerController.list);
router.delete('/players/:id', PlayerController.delete);




export default router;

//Postman , MongoDB Community Edition - (Robot3T)