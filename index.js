const fs = require('fs');
function readFileAndPrint(filename) {
    fs.readFile(filename,'utf-8',(err,data) => {
        if(err) {
            console.log(`Error reading File: ${err}`);
            return;
        }
        console.log(data);
    });
}
function writeExclaimationAtEnd(filename) {
    fs.appendFile(filename,'!',(err) => {
        if(err) {
            console.log(`Error writing File: ${err}`);
            return;
        }
        console.log('File written successfully');
    });
}
readFileAndPrint('file.txt');
writeExclaimationAtEnd('file.txt');