const http = require('http');

const host = 'localhost';
const post = 8080;

function requestListener(req, res) {}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});