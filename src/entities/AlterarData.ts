import { v4 as uuid} from 'uuid';

class Chamado {
    readonly id: string

    categoria: string

    sub_categoria: string

    solicitante: string

    tel_origem: string

    assunto: string

    descricao: string 

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}