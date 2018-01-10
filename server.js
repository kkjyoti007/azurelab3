var port = process.env.PORT || 8000
var http = require("http")
var server = http.createServer(function(request,response) {
	response.write("<html>");
	response.write("<head>");
	response.write("</head>");
	response.write("<body>");
	response.write("hello world");
	response.write("</body>");
	response.write("</html>");
	response.end();
})
server.listen(port);