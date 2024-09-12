import { Recinto } from './classes/Recinto.js';

class RecintosZoo {
    constructor() {
        this.recintos = [
            new Recinto(1, 'savana', 10, [{ especie: 'MACACO', tamanho: 1, quantidade: 3 }]),
            new Recinto(2, 'floresta', 5, []),
            new Recinto(3, 'savana e rio', 7, [{ especie: 'GAZELA', tamanho: 2, quantidade: 1 }]),
            new Recinto(4, 'rio', 8, []),
            new Recinto(5, 'savana', 9, [{ especie: 'LEAO', tamanho: 3, quantidade: 1 }])
        ];
    }

    analisaRecintos(animalNome, quantidade) {
        // Verifica se o animal é válido
        if (!this.isAnimalValido(animalNome)) {
            return { erro: "Animal inválido" };
        }

        // Verifica se a quantidade é válida
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return { erro: "Quantidade inválida" };
        }

        // Filtra os recintos viáveis de acordo com as regras
        const recintosViaveis = this.recintos
            .filter(recinto => recinto.podeAdicionarAnimal(animal, quantidade))
            .map(recinto => {
                const espacoLivre = recinto.tamanho - (recinto.getEspacoOcupado() + (animalNome.tamanho * quantidade));
                return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`;
            });

        // Retorna a lista de recintos viáveis ou erro caso não haja recinto viável
        if (recintosViaveis.length > 0) {
            return { recintosViaveis: recintosViaveis.sort() };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }

    // Valida se o animal faz parte do zoológico
    isAnimalValido(animalNome) {
        const especiesValidas = ['LEAO', 'LEOPARDO', 'CROCODILO', 'MACACO', 'GAZELA', 'HIPOPOTAMO'];
        return especiesValidas.includes(animalNome.especie);
    }
}

export { RecintosZoo as RecintosZoo };
