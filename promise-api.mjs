/*** 
 * 
 * 
 * File system:- promise API:readFile(), appendFile(), copyFile(), stat() 
 * 


// Promise API
import * as fs from 'fs/promises';

//create folder
async function createDirectory() {
  try {
    // Use the correct path separator and escape characters in the path string
    await fs.mkdir('C:\\Users\\north\\Downloads\\Node-Js\\test\\demo', {
      recursive: true,
    });
    console.log('Directory Created.......');
  } catch (error) {
    console.log(error);
  }
}

// Read Folder
async function readDirectory() {
  try {
    const files = await fs.readdir('C:\\Users\\north\\Downloads\\Node-Js');
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.log(error);
  }
}

// Remove Directory
async function removeDirectory(){
  try{
    await fs.rmdir('c:\\Users\\north\\Downloads\\Node-Js\\test\\demo');
    console.log("Directory removed....");
  }catch (error){
    console.log(error);
  }
}
// Call the function to Promises API
createDirectory();
readDirectory();
removeDirectory();
 * 
 * 
 * */

/**
 * Operations on Files
 

// create and write
async function createWriteFile(){
try{
  await fs.writeFile('C:\\Users\\north\\Downloads\\Node-Js\\test\\read-me.txt','Hello Node JS');
  console.log("SuccessFully!!!");
}catch(error){
  console.log(error);
};
};

// Read file
async function readFile(){
  try{
    const data=await fs.readFile('C:\\Users\\north\\Downloads\\Node-Js\\read-me.txt','utf-8');
    console.log(data);
  }catch(error){
    console.log(error);
  };
  };


// Append data into file
async function appendFile(){
  try{
    const data=await fs.appendFile('read-me.txt','\n \t Welcome to Success');
    console.log(data);
  }catch(error){
    console.log(error);
  };
  };
  
// Copy file
async function copyFile(){
  try{
    const data=await fs.copyFile('index.mjs','promise-api.mjs');
    console.log(data);
  }catch(error){
    console.log(error);
  };
  };

// Get file information
async function fileInfo(){
  try{
    const data=await fs.stat('C:\\Users\\north\\Downloads\\Node-Js\\index.mjs');
    console.log(data);
    console.log(data.isDirectory());
    console.log(data.isFile());
  }catch(error){
    console.log(error);
  };
  };
  

//Call file functions functions
// createWriteFile();
// appendFile();
// readFile();
copyFile();
// fileInfo();
*
*/

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
    const data=await fs.copyFile('index.mjs','promise-api.mjs',(error)=>{
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
readDirectory();
createWriteFile();
removeDirectory();

// Call file functions functions
createWriteFile();
appendFile();
readFile();
copyFile();
fileInfo();