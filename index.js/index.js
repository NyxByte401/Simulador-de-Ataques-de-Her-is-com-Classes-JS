// Definição da classe Herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar conforme os requisitos do desafio
  atacar() {
    let ataque;

    // Estrutura de decisão para definir o ataque baseado no tipo
    switch (this.tipo.toLowerCase()) {
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

    // Saída conforme solicitado: "o {tipo} atacou usando {ataque}"
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso (Para testar o código):
const meuHeroi = new Heroi("Aragorn", 30, "guerreiro");
meuHeroi.atacar();

const meuMago = new Heroi("Gandalf", 100, "mago");
meuMago.atacar();