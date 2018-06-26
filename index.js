const express = require('express');    //import the express library
const app = express();                //listen to requests and route them to handlers


//Create a route handler and associate it with a given route
// '/' indicates root route
app.get( '/' , (req, res) => {
	
	res.send({ hi: 'there' });
	
});

//to dynamically figure out what port should we be listenning to
const PORT = process.env.PORT || 5000;

app.listen(PORT);


//https://git.heroku.com/dry-waters-25499.git commit target
