import {Router} from 'express';
import LocalController from './app/controllers/LocalController';
import EnderecoController from './app/controllers/EnderecoCotroller';
import JogadorController from './app/controllers/EnderecoCotroller';

const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store);
router.delete('/endereco/delete', EnderecoController.delete);


//http://localhost:3000/local/list
router.get('/local/list', LocalController.list);
router.post('/local/store', LocalController.store);
router.delete('/local/delete', LocalController.delete);


//http://localhost:3000/jogador/list
router.get('/jogador/list', JogadorController.list);
router.post('/jogador/store', JogadorController.store);
router.delete('/jogador/delete', JogadorController.delete);

export default router;