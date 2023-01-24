## Express API Example
How to use express to route endpoints to API

## Installation
Please install node modules first:

`npm install`

## Running

`npm start`

## Calling endpoint via browser

`http://localhost:5000/api/teams`
#
`http://localhost:5000/api/teamsdata`
#
`http://localhost:5000/api/teamsrepos`
#
`http://localhost:5000/api/teamsjson`

## Description
Express makes it easy to route to end points as part of your API, and remember, this is all done without blocking the thread.

We add the express module using require (needs to be installed via package manager - npm etc - npm install express)

Eg. 
``` javascript
let express = require('express');
```
## Create an instance of express
``` javascript 
let app = express();
```

## Create an instance of express router
``` javascript 
let router = express.Router();`
```

## Create an end point - this one can be reached at serveraddress:portnumber/api/hello
``` javascript 
router.get('/hello',function(req,res) {
  res.send('Hello from express');
});
```


## set api route for end points
``` javascript
app.use('/api',router);
```
## server to listen on whichever port you give it
``` javascript
app.listen(portnumber, function() {
  // server running
}
```
Of course there are other ways of doing this, but this is simple and elegant.  I recommend looking at how to do this the node.js vanilla way using http module to show that by using express, it is so much simpler.  

Note the response object in the end point can return json by simply adding the json method after the response object:
``` javascript
res.json({'Message':'Hello from Express'});
```
I recommend creating all your routes in a separate module and include this in your main file, example:

``` javascript
let express = require('express');
let router = express.Router();
let routes = function() {
  router.route('/') .get(function(req,res) { // whatever });
  router.route('hello').get(function(req,res) { // whatever } );
  return router;
};
module.exports = routes;
```
