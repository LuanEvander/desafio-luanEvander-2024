import { Recinto } from './classes/Recinto.js';
import { Animal } from './classes/Animal.js';

class RecintosZoo {
    constructor() {
        this.recintos = [
            new Recinto(1, 'savana', 10, [new Animal('MACACO', 3)]),
            new Recinto(2, 'floresta', 5, []),
            new Recinto(3, 'savana e rio', 7, [new Animal('GAZELA', 1)]),
            new Recinto(4, 'rio', 8, []),
            new Recinto(5, 'savana', 9, [new Animal('LEAO', 1)])
        ];
    }

    analisaRecintos(animalNome, quantidade) {
        console.log(`Analisando recintos para ${animalNome} com quantidade ${quantidade}`);
        // Verifica se a quantidade é válida
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return { erro: "Quantidade inválida" };
        }

        // Verifica se o animal é válido
        if (!this.isAnimalValido(animalNome)) {
            return { erro: "Animal inválido" };
        }

        const animal = new Animal(animalNome, quantidade);

        // Filtra os recintos viáveis de acordo com as regras
        const recintosViaveis = this.recintos
            .filter(recinto => {
                const podeAdicionar = recinto.podeAdicionarAnimal(animal, quantidade);
                console.log(`Recinto ${recinto.numero}: pode adicionar ${animalNome}? ${podeAdicionar}`);
                return podeAdicionar;
            })
            .map(recinto => {
                const espacoOcupado = recinto.getEspacoOcupado();
                const espacoNecessario = animal.tamanho * quantidade;
                const espacoLivre = recinto.tamanho - (espacoOcupado + espacoNecessario);
                return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`;
            });

        console.log('Recintos viáveis:', recintosViaveis);

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
        return especiesValidas.includes(animalNome);
    }
}

export { RecintosZoo as RecintosZoo };
