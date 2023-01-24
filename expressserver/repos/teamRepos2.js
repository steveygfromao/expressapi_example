let fs = require('fs');

const FILE_NAME = './assets/teams.json';

let teamrepos2 = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function(err,data){
            if(err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        })
    }
};

module.exports = teamrepos2;
