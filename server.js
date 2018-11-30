const express = require('express');
const app = express();
const fs = require ("fs");

/* method >listUsers
*/

app.get('/listUsers', function (req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err,data){
		console.log(data);
		red.send(data);
	});
})

let server = app.listen(8081, function (){
	let host = server.address().address
	let port = server.address().port
	console.log("Launch API restful with the following URI http://%s:%s", host, port)

})



