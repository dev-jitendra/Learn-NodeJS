// Create Web Server :- http module
import http from 'http'
// const server=http.createServer((req, res)=>{
//     res.setHeader(`Content-Type`,`text/plain`)
//     res.end('Responce from server');
    
// });
// server.listen(5400, 'localhost', ()=>{
//     console.log(`Server Running at https://localhost:5400`);
// });

const server=http.createServer((req, res)=>{
    //Request
    // if(req.url != '/favicon.ico'){
    // console.log(req.url);
    // }
    // console.log(req.method);
    // res.setHeader(`Content-Type`,`text/plain`)
    // res.end('Responce from server1');

    // Responce
    // res.statusCode=202;
    // res.statusMessage="Good"
    // res.setHeader(`Content-Type`,`text/plain`)
    res.writeHead(206, "Nice", { 'Content-Type':'text/plain' });
    res.end('Responce from server1');
    
});

const PORT = process.env.PORT || 5400;
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{
    console.log(`Server Running at https://localhost:5400`);
});

