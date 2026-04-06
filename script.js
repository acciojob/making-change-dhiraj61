const makeChange = (c) => {
  // your name here
  let q = Math.floor(c / 25);
  c = c % 25;

  let d = Math.floor(c / 10);
  c = c % 10;

  let n = Math.floor(c / 5);
  c = c % 5;

  let p = c;

  return { "q":q, "d":d, "n":n, "p":p };
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
