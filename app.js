/* How to create a node server: 
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module */

const http = require('http');

const host = 'localhost';
const port = '8080';


/* This function is meant to handle an incoming HTTP request and return an HTTP response. */
const requestListener = function(req, res) {
	res.writeHead(200);
	res.end('My first server.');
}

/* Create server */
const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});