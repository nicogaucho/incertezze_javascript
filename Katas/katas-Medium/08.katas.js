/* 
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).
Examples

"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

function hexHash(string) {
  let convert = string.split('');
  console.log(convert);
  let mapping = convert.map(el => el.charCodeAt().toString(16));
  console.log(mapping);
  let joina = mapping.join('');
  console.log(joina);
  let soloNum = joina.replace(/[^\d]/g,'');
  console.log(soloNum);
  let splitta = soloNum.split('');
  console.log(splitta);
  let riduci = splitta.reduce((acc, x) => {
    return acc + +x;
  },0);
  console.log(riduci);
}


hexHash("hello, world!");
hexHash("hola, mundo!");
hexHash("ciao, mondo!");




