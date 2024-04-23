#!/usr/bin/node
// Check the number of arguments passed to the script
const numberOfArgs = process.argv.length - 2;

// Print messages based on the number of arguments
if (numberOfArgs === 0) {
    console.log("No argument");
} else if (numberOfArgs === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

//console.log(numberOfArgs === 0 ? 'No argument' : 'numberOfArgs === 1' ? 'Argument found' : 'Arguments found');
