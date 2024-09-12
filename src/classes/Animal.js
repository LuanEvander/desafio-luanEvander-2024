class Animal {
    constructor(especie) {
        switch (especie) {
            case 'LEAO':
                this.especie = 'LEAO';
                this.tamanho = 3;
                this.biomas = ['savana'];
                this.carnivoro = true;
                break;

            case 'LEOPARDO':
                this.especie = 'LEOPARDO';
                this.tamanho = 2;
                this.biomas = ['savana'];
                this.carnivoro = true;
                break;

            case 'CROCODILO':
                this.especie = 'CROCODILO';
                this.tamanho = 3;
                this.biomas = ['rio'];
                this.carnivoro = true;
                break;
            
            case 'MACACO':
                this.especie = 'MACACO';
                this.tamanho = 1;
                this.biomas = ['savana', 'floresta'];
                this.carnivoro = false;
                break;

            case 'GAZELA':
                this.especie = 'GAZELA';
                this.tamanho = 2;
                this.biomas = ['savana'];
                this.carnivoro = false;
                break;

            case 'HIPOPOTAMO':
                this.especie = 'HIPOPOTAMO';
                this.tamanho = 4;
                this.biomas = ['savana', 'rio'];
                this.carnivoro = false;
                break;
        }
    }
}

export { Animal };