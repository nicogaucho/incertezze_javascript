

const numeros = [1,2,3,4,5,6,7,8,9,10];

const numPares = numeros.filter( num => {
  return num % 2 === 0;
} )

console.log(numPares);



const dias = [ 
  'lunes',
  'martes',
  'miercoles',
  'juves',
  'viernes',
  'sabado',
  'domingo'
];

const diasQueEmpiezanPorM = dias.filter( dia => {
  return dia.charAt(0) === 'm';
})

console.log(diasQueEmpiezanPorM);






const personas = [
    { 
      nombre: 'Nic',
      apellido: 'Gasparro'
    },
    { 
      nombre: 'Gracia',
      apellido: 'Diaz'
    },
    { 
      nombre: 'Nico',
      apellido: 'Milella'
    },
    { 
      nombre: 'Christofer',
      apellido: 'booo'
    }
  ];
  
  
  const personaMenorQuatroLetras = personas.filter( persona => {
      return persona.nombre.length < 4;
  });

  console.log(personaMenorQuatroLetras);






  const animales = [
    {
      nombre: 'gato',
      tamano: 'pequeno'
    },
    {
      nombre: 'perro',
      tamano: 'mediano'
    },
    {
      nombre: 'pesce',
      tamano: 'pequeno'
    },
    {
      nombre: 'cabra',
      tamano: 'mediano'
    },
    {
      nombre: 'vaca',
      tamano: 'grande'
    },
    {
      nombre: 'elefante',
      tamano: 'grande'
    }
  ];

  const animalesPequenos = animales.filter( peque => {
    return peque.tamano === 'grande';
  });

  console.log(animalesPequenos);






  const palabras = ['pagina', 'libro', 'substantivo', 'tecnologia', 'esuberante','limitacion'];

  const palabrasLarga = palabras.filter( larga => {
    return larga.length > 6;
  })

  console.log(palabrasLarga);

