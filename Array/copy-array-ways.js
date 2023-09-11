// 16 modalità per fare una shallow copy array...
const values = [1, 2, 3, 4, 5];

const valuesCopy1 = [...values];

const valuesCopy2 = Array.apply(null, values);

const valuesCopy3 = values.slice();

const valuesCopy4 = Array.from(values);

const valuesCopy5 = [].concat(values);

const valuesCopy6 = Object.assign([], values);

const valuesCopy7 = Object.values(values);

const valuesCopy8 = values.filter(() => true);

const valuesCopy9 = values.map((value) => value);

const valuesCopy10 = values.flatMap((value) => value);

const valuesCopy11 = values.reduce((copy, value) => {
  copy.push(value);
  return copy;
}, []);

const valuesCopy12 = values.reduceRight((copy, value) => {
  copy.unshift(value);
  return copy;
}, []);

const valuesCopy13 = [];
for (let i = 0; i < values.length; i++) {
  valuesCopy13.push(values[i]);
}

const valuesCopy14 = [];
values.forEach((value) => {
  valuesCopy14.push(value);
});

const valuesCopy15 = [];
let i = 0;
while (i < values.length) {
  valuesCopy15.push(values[i]);
  i++;
}


