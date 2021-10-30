import { Router } from 'express';
import { ChamadoAlterarDataController } from './controllers/ChamadoAlterarDataController'



const router = Router();


const chamadoAlterarDataController = new ChamadoAlterarDataController();


router.post(
    "/Chamados/AlterarData",
    chamadoAlterarDataController.handle
);

export { router };