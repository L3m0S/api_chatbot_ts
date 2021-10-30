import { Request, Response} from 'express';

import { ChamadoAlterarDataService } from '../services/ChamadoAlterarDataService'


class ChamadoAlterarDataController {
    
    async handle(request: Request, response: Response) {
        const {interesse, nome, tel, documento, vencimento} = request.body;

        const chamadoAlterarDataService = new ChamadoAlterarDataService();

        const chamado = await chamadoAlterarDataService.execute({
            interesse,
            nome,
            tel,
            documento,
            vencimento
        });

        return response.json(chamado);

    }
}

export { ChamadoAlterarDataController }