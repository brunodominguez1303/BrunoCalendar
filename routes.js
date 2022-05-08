const http = require('http');

const host = 'localhost';
const port = 8080;

function requestListener(req, res) {}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server running on http://${host}:${port}`);
});