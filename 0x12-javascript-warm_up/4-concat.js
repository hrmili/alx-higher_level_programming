#!/usr/bin/node
// Check if at least two arguments are passed to the script
if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
    console.log(process.argv[2] + " is " + process.argv[3]);
} else {
    console.log("Insufficient arguments");
}
