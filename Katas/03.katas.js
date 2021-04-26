// il tuo compito é rimuovere i duplicati delle parole nella seguente stringa. 

// input : "alpha beta beta gamma gamma delta alpha beta beta gamma gamma gamma delta"

// output : "alpha beta gamma delta"


function removeDuplicate(str) {
  const noDuplicate = Array.from(new Set());
  const words = str.split(' ');
  const filtro = words.filter( el =>  {
    if (noDuplicate.includes(el)) {
      return false;
    } else {
      return noDuplicate.push(el)
    }
  })
  const toString = filtro.join(' ');
  return toString;
}

console.log(removeDuplicate("alpha beta beta gamma gamma delta alpha beta beta gamma gamma gamma delta"));



// se lavoro sul set... 

function removeDuplicate(str) {
  const noDuplicate = new Set();
  const words = str.split(' ');
  const filtro = words.filter( el =>  {
    if (noDuplicate.has(el)) {
      return false;
    } else {
      return noDuplicate.add(el)
    }
  })
  const toString = filtro.join(' ');
  return toString;
}

console.log(removeDuplicate("alpha beta beta gamma gamma delta alpha beta beta gamma gamma gamma delta"));

