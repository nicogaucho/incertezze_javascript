const player = {
  name: 'NG',  
  damagePerTick: 10, 
  hunger: 0, 
  inventory: [
    {
      type: 'bread', 
      nutricianValue: 100,
    }, 
    {
      type: 'wallnuts', 
      nutricianValue: 250,
    }
  ],
  tick() {
    this.hunger += 1; 
    // EXAMPLE 1
    // need to define a variable to read in the up function scope 
    const self = this;
    // using f definition not able to read this as global 
    this.inventory.forEach(function decrease(item) {
      item.nutricianValue -= self.damagePerTick; 
    });

    // EXAMPLE 2
    // One way to solve with bind function
    this.inventory.forEach((function decrease(item) {
      item.nutricianValue -= this.damagePerTick; 
    }).bind(this));
    // EXAMPLE 3
    // arrow function, because thay have lexical scoping, able to read variables around them 
    this.inventory.forEach((item) => {
      item.nutricianValue -= this.damagePerTick; 
    });
    // BUT IN ARROW FUNCTION YOU CANT CREATE AN INSTANCE OF THIS INSIDE OF IT 
  }, 
  takeStep() {
    this.hunger += 10;
  }
};

setInterval(() => {
  // player.takeStep();  
  player.tick();  
}, 2000);

setInterval(() => {
  // console.log(`Current Hunger of ${player.name} is: `, player.hunger)
  console.log(`Current invertory of ${player.name} is: `, player.inventory)
}, 2000);





