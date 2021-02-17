import fs from 'fs';

let output = fs
  .readFileSync('./data.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((a, c) => {
    a[c[0]] = [];
    a[c[0]].push({ name: c[1], price: c[2], quantity: c[3] });
    return a;
  }, {});
console.log(JSON.stringify(output, null, 2));
