// Prima domanda 
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
// sayHi();

// Le variabili dichiarate con la chiave `let` (o `const`) vengono sollevate, ma a differenza delle variabili dichiarate con `var`, non vengono <i>inizializzate</i>. Per questo motivo non sono accessibili prima della loro dichiarazione (dove le inizializzaimo). Questa è chiamata "temporal dead zone". Quando proviamo ad accedere alle variabili prima che vengano dichiarate, JavaScript genera un `ReferenceError`.


// seconda domanda

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}