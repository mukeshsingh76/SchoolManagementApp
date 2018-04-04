const os = require("os");
var totalmemory = os.totalmem();
var freememory = os.freemem();

console.log("Total Memory : " + totalmemory);
console.log("Free Memory : " + freememory);
