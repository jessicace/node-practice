// You can access command-line arguments via the global process object.
// The process object has an argv property, which is an array containing the complete command-line.
// console.log(process.argv);
var total = 0;
for (var argument = 2; argument < process.argv.length; argument++) {
  total += Number(process.argv[argument]);
}
console.log(total);