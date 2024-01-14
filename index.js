class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque indefinido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi('Mario', 100, 'mago');
  const guerreiro = new Heroi('Leo', 30, 'guerreiro');
  const monge = new Heroi('Luan', 40, 'monge');
  const ninja = new Heroi('Enzo', 25, 'ninja');
  
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  