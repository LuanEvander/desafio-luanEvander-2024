class Zoologico {
    constructor() {
      this.recintos = [];
      this.animaisDisponiveis = this.inicializarAnimais();
    }
  
    inicializarAnimais() {
      return {
        'LEAO': new Animal('LEAO', 3, ['savana'], true),
        'LEOPARDO': new Animal('LEOPARDO', 2, ['savana'], true),
        'CROCODILO': new Animal('CROCODILO', 3, ['rio'], true),
        'MACACO': new Animal('MACACO', 1, ['savana', 'floresta']),
        'GAZELA': new Animal('GAZELA', 2, ['savana']),
        'HIPOPOTAMO': new Animal('HIPOPOTAMO', 4, ['savana', 'rio']),
      };
    }
  
    adicionarRecinto(recinto) {
      this.recintos.push(recinto);
    }
  
    analisaRecintos(tipoAnimal, quantidade) {
      let animal = this.animaisDisponiveis[tipoAnimal];
  
      if (!animal) {
        return { erro: "Animal inválido" };
      }
  
      if (quantidade <= 0 || !Number.isInteger(quantidade)) {
        return { erro: "Quantidade inválida" };
      }
  
      let recintosViaveis = this.recintos.filter((recinto) => recinto.podeAdicionarAnimal(animal, quantidade))
        .map((recinto) => {
          let espacoOcupado = recinto.getEspacoOcupado();
          let espacoLivre = recinto.tamanho - (espacoOcupado + animal.tamanho * quantidade);
          return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`;
        });
  
      if (recintosViaveis.length === 0) {
        return { erro: "Não há recinto viável" };
      }
  
      return { recintosViaveis };
    }
  }
  