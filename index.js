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

function writeExclaimationAtEnd(filename,content) {
    fs.appendFile(filename,content,(err) => {
        if(err) {
            console.log(`Error writing File: ${err}`);
            return;
        }
        console.log('File written successfully');
    });
}

function removeDirectory(directoryName) {
    fs.rmdir(directoryName,(err) => {
        if(err) {
            console.log(`Error removing directory: ${err}`);
            return;
        }
        console.log('Directory removed successfully');
    });
}

function renameFile(oldName,newName) {
    fs.rename(oldName,newName,(err) => {
        if(err) {
            console.log(`Error renaming file: ${err}`);
            return;
        }
        console.log('File renamed successfully');
    });
}

function makeDirectory(directoryName) {
    fs.mkdir(directoryName, { recursive: true }, (err) => {
        if (err) {
            console.log(`Error creating directory: ${err}`);
            return;
        }
        console.log('Directory created successfully');
    });
}

readFileAndPrint('file.txt');
writeExclaimationAtEnd('file.txt','!');
renameFile('file.txt','newFile.txt');
makeDirectory('newDirectory');
removeDirectory('newDirectory');