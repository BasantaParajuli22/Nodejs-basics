import http from 'http';

const server = http.createServer((req,res) => {

    res.writeHead(200, { 'ContentType' : 'text/http' } );
    res.write("<h1> whats up  </h1>");
    res.end();
});

server.listen( 5000 , () => {
    console.log("server running ", 5000);
})