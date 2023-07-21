/**
 * Callback API
 * /
 */

// File System | Callback API
import * as fs from 'fs';

// //Creating directory - path should be there
async function createDirectory(){
// fs.mkdir('C:\\Users\\north\\Downloads\\Node-Js\\test\\demo', (error)=>{
//   if(error) throw error;
//   console.log("Directory Created...");
// });
await fs.mkdir('C:\\Users\\north\\Downloads\\Node-Js\\Python\\hello.py', { recursive: true },(error)=>{
  if(error) throw error;
  console.log("Directory Created...");
});
};

//Read Content of Directory
async function readDirectory(){
  await fs.readdir('C:\\Users\\north\\Downloads\\Node-Js',(error, files)=>{
    if(error) throw error;
    for(const file of files){
      console.log(file);
    };
  });
};

// Remove Directory
async function removeDirectory(){
  await fs.rmdir('C:\\Users\\north\\Downloads\\Node-Js\\test\\demo',(error)=>{
    if(error) throw error;
    console.log("Directory Removed...");
  })
}

// Create and write file
async function createWriteFile(){
  await fs.writeFile('readme.txt','data{:\n \t asdlfjlsadkfjlksjl asd;lfkjs df;sldfkj sadflkj sadfkjsd fl}',(error)=>{
    if(error) throw error;
    console.log('File Created...');
  });
};

// Read file
async function readFile(){
    const data=await fs.readFile('C:\\Users\\north\\Downloads\\Node-Js\\read-me.txt','utf-8',(error)=>{
      if(error) throw error;
      console.log(data);
    });
  };


// Append data into file
async function appendFile(){
    const data=await fs.appendFile('read-me.txt','\n \t Welcome to Success',(error)=>{
      if(error) throw error;
      console.log(data);
    });
  };
  
// Copy file
async function copyFile(){
    const data=await fs.copyFile('index.mjs','callback-api.mjs',(error)=>{
      if(error) throw error;
      console.log(data);
    });
  };

// Get file information
async function fileInfo(){
    const data=await fs.stat('C:\\Users\\north\\Downloads\\Node-Js\\index.mjs',(error)=>{
      if(error) throw error;
      console.log(data);
    })};
  
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