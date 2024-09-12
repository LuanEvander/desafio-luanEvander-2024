class Recinto {
    constructor(numero, bioma, tamanho, animais = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanho = tamanho;
        this.animais = animais;
    }

    podeAdicionarAnimal(animal, quantidade) {
        // Verifica se o bioma é adequado para o animal a ser adicionado
        if (!animal.biomas.includes(this.bioma)) {
            return false;
        }

        let espacoOcupado = this.getEspacoOcupado();
        let espacoNecessario = animal.tamanho * quantidade;

        // Quando o animal é de espécie diferente, é necessário um espaço adicional
        let especiesPresentes = new Set(this.animais.map(a => a.especie));
        if (especiesPresentes.size > 1 || !especiesPresentes.has(animal.especie)) {
            espacoNecessario += 1; // Considerar espaço extra
        }

        // Verifica se há espaço suficiente para adicionar o animal
        if (espacoOcupado + espacoNecessario > this.tamanho) {
            return false;
        }

        // Animais carnívoros devem habitar somente com a própria espécie
        if (animal.carnivoro) {
            if (this.animais.length > 0 && this.animais.some(a => a.especie !== animal.especie)) {
                return false;
            }
        }

        // Hipopótafmos só toleram outras espécies em savana e rio
        if (animal.especie === 'HIPOPOTAMO') {
            if (this.bioma !== 'savana e rio' && this.animais.length > 0) {
                return false;
            }
        }

        // Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
        if (animal.especie === 'MACACO') {
            if (this.animais.length === 0 || !especiesPresentes.size > 0) {
                return false;
            }
        }

        return true;
    }

    getEspacoOcupado() {
        return this.animais.reduce((total, a) => total + (a.tamanho * a.quantidade), 0);
    }
}

export { Recinto };