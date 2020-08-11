import { getPartida, createPartida, deletePartida } from './src/controllers/partida/partida_controller';
import { Router } from 'express'
const Routes =  Router();

Routes.get('/',getPartida)
Routes.post('/create',createPartida)
Routes.delete('/delete/:id',deletePartida)


export default Routes