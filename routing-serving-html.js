// Create Web Server :- http module
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  res.writeHead(206, 'Nice', { 'Content-Type': 'text/html' });

  if(req.url === '/'){
    fs.readFile('./public/index.html', (error, data)=>{
        if(error) throw error;
        res.end(data);
    })
  }
  else if(req.url ==='/about'){
    fs.readFile('./public/about.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    })
  }
  else{
    res.end('<h1> 404 Page Not Find')
  };
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Server Running at https://localhost:${PORT}`);
});
