const makeChange = (c) => {
  // your name here
	let penny = 1, nickel = 5, dime = 10, quarter = 25;
	let p = 0, n = 0, d = 0, q = 0;
	while(c > 0){
		if(c >= quarter){
			q++;
			c -= quarter;
		}else if(c >= dime){
			d++;
			c -= dime;
		}else if(c >= nickel){
			n++;
			c -= nickel;
		}else{
			p++;
			c -= penny;
		}
	}
	let ans = {"q" : q, "d" : d, "n" : n, "p" : p};
	return ans;
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
