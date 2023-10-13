class Pai {
    nome = null
    constructor(nome) {
        this.nome = `${nome} otario!`;
    }
}

class Herdeiro extends Pai {
    constructor() {
        super("gabriel")
    }
}

const herdeiro = new Herdeiro()
console.log(herdeiro.nome);