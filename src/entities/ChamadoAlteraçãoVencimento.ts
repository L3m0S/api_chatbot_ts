
class Chamado {
    
    interesse: string

    nome: string

    tel: string

    documento: string

    vencimento: string

    constructor(interesse, nome, tel, documento, vencimento){
        this.interesse = interesse;
        this.nome = nome;
        this.tel = tel;
        this.documento = documento;
        this.vencimento = vencimento
    }

}

export { Chamado }