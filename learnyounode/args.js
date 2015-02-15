var sum = 0;
var temp = 0;
for( i = 2; i < process.argv.length; i++) {
	temp = process.argv[i];
	sum += Number(temp);
}

console.log(sum);

