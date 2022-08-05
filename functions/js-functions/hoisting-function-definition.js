// invoke a function antes de su definición, sigue funcionanado?? 
// la respuesta es si!! Porque se activa el mecanismo de hoisting 
// cuando el engine de js parsea nuestro codigo todas las functions definitions se mueven arriba del fichero
// super conveniente, verdad? :)
add(2,2);

function add(a,b) {
    return a + b;
}

