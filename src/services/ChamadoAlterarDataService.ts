import { Chamado } from '../entities/ChamadoAlteraçãoVencimento';
import {ChamadoAlterarData} from '../models/AlterarDataModel';


interface IChamadoRequest {
    interesse: string

    nome: string

    tel: string

    documento: string

    vencimento: string
}

class ChamadoAlterarDataService {

    async execute({interesse, nome, tel, documento, vencimento}: IChamadoRequest) {
        if(!nome) {
            throw new Error("Por gentileza, preencha corretamente o nome!")
        }

        if(!documento) {
            throw new Error("Por gentileza, preencha o documento corretamente!")
        }

        if(!vencimento) {
            throw new Error("Por gentileza, preencha o documento corretamente!")
        }

        const ChamadoAlterarDataAlreadyExists = await ChamadoAlterarData.findOne({
            documento: documento
        });

        console.log(ChamadoAlterarDataAlreadyExists)

        if(ChamadoAlterarDataAlreadyExists) {
            throw new Error("Já existe um chamado de alteração de data aberto em seu cadastro!")
        };

        const chamadoAlterarData = new Chamado(interesse, nome, tel, documento, vencimento);

        const chamado = await ChamadoAlterarData.create(chamadoAlterarData);

        return chamado;
    }
 }

export { ChamadoAlterarDataService }