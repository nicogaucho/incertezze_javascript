class Giocatore {
  constructor(nome) {
    this.nome = nome;
    this.Morto = false;
    this.fame = 0;
    this.dannoPerPasso = 10;
    this.inventario = [
      {
        type: 'pane',
        value: 100,
      },
    ];
  }

  passo() {
    this.fame += 1;
    if (this.fame >= 100) {
      this.Morto = true;
    }
    // senza arrow fun sono contretto a definire dentro la funzione this per poterlo utilizzare in una sotto funzione 

    // const that = this;
    // this.inventario.forEach(function (item) {
    //   item.value -= that.dannoPerPasso;
    // });

    // vantaggio della arrow fun, posso usare .. this .. dentro della funzione, perche l'arrow function favorisce lo scoping 
    this.inventario.forEach((item) => {
      item.value -= this.dannoPerPasso;
    });
  }

  faiUnPasso() {
    this.fame += 10;
  }

  mangia(cibo) {
    this.fame -= food.value;
    if (this.fame < 0) {
      this.fame = 0;
    }
    if (this.fame >= 100) {
      this.Morto = true;
    }
  }
}

const giocatore1 = new Giocatore('Nico');

setInterval(() => {
  giocatore1.passo();
}, 2000);

console.log('inventario corrente:', giocatore1.inventario);
setInterval(() => {
  console.log('inventario corrente:', giocatore1.inventario);
}, 2000);