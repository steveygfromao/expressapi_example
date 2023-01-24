let express = require('express');
let app = express();
let router = express.Router();
let teamRepo = require('./repos/teamRepos');
let teamRepo2 = require('./repos/teamRepos2');

router.get('/hello',function(req,res,next) {
    res.send("Called api hello");
});

router.get('/goodbye',function(req,res,next) {
    res.send("Called api goodbye");
});

let teams = [ 
    { id:"1", name:"Liverpool"},
    { id:"2", name:"Manchester Utd"},
    { id:"3", name:"Leeds"},
    { id:"4", name:"Burnley"},
];

router.get('/teams',function(req,res,next) {
    res.status(200).send(teams);
});

router.get('/teamsdata',function(req,res,next) {
    res.status(200).json({
        "status":200,
        "statusText":"OK",
        "message":"All teams retrieved",
        "data":teams
    });
});

let teams2 = teamRepo.get();
router.get('/teamsrepo',function(req,res,next) {
    res.status(200).json({
        "status":200,
        "statusText":"OK",
        "message":"All teams retrieved",
        "data":teams2
    });
});


router.get('/teamsjson',function(req,res,next) {
    teamRepo2.get(function (data) {
        res.status(200).json({
            "status":200,
            "statusText":"OK",
            "message":"All teams retrieved from json file",
            "data":data
        });
    }, function(err) {
        next(err);
    });
});


app.use('/api/',router);

let server = app.listen(5000,function() {
    console.log('Node server is running on port 5000...');
});

