/**
 * File System | Synchronous API
 */
import * as fs from 'fs';

//create folder
async function createDirectory() {
    // Use the correct path separator and escape characters in the path string
    await fs.mkdirSync('C:\\Users\\north\\Downloads\\Node-Js\\test\\demo', {
      recursive: true,
    });
}

// Read Folder
async function readDirectory() {
    const files = await fs.readdirSync('C:\\Users\\north\\Downloads\\Node-Js');
    console.log(files);
}

// Remove Directory
async function removeDirectory(){
    await fs.rmdirSync('c:\\Users\\north\\Downloads\\Node-Js\\test\\demo');
}


/**
 * Operations on Files
 */

// create and write
async function createWriteFile(){
  await fs.writeFileSync('C:\\Users\\north\\Downloads\\Node-Js\\test\\read-me.txt','Hello Node JS');
};

// Read file
async function readFile(){
    const data=await fs.readFileSync('C:\\Users\\north\\Downloads\\Node-Js\\read-me.txt','utf-8');
    console.log(data);
  };


// Append data into file
async function appendFile(){
    const data=await fs.appendFileSync('read-me.txt','\n \t Welcome to Success');
    console.log(data);
  };
  
// Copy file
async function copyFile(){
    const data=await fs.copyFileSync('index.mjs','promise-api.mjs');
    console.log(data);
  };

// Get file information
async function fileInfo(){
    const data=await fs.statSync('C:\\Users\\north\\Downloads\\Node-Js\\index.mjs');
    console.log(data);
  };
  

//  Call directory functions
createDirectory();
readDirectory();
createWriteFile();
removeDirectory();

// Call file functions functions
createWriteFile();
appendFile();
readFile();
fileInfo();
copyFile();