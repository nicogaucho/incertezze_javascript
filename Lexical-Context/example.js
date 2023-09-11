const person = {
  nome: 'NG', 
  sayMyName: function() {
    // in questo modo this fa riferimento a tutto l'oggetto person...
    console.log('Hey', this.nome)
  }, 
}; 

person.sayMyName(); // NG


