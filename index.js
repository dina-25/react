const express = require('express');    //import the express library
const app = express();                //listen to requests and route them to handlers


//Create a route handler and associate it with a given route
app.get( '/' , (req, res) => {
	
	res.send({ hi: 'there' });
	
});

app.listen(5000);