function makeid(l) {
  // write your code here
	let tmpString = abcdefghijklmnopqrstuvwxyz0123456789;
	let string = "";
	for( let i=0;i<l;i++){
		let index = Math.floor(Marh.random()*(tmpString.length-1));
		string+=tmpString[index];
	}
	return string;
}

// Do not change the code below
const l = prompt("Enter a number.");
alert(makeid(l));
