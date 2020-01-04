let b = 0;
let a = '';

while (b < 40) {
  a = a + Math.random().toString(36)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '')
      // .replace(/\./g, '')
      .replace(/[^a-z]+/g, '')
      .substr(0, 10);
  console.log(a);
  b++;
}


let code_verified = a.substr(0, 50);
console.log(code_verified);