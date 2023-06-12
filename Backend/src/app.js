const express = require('express');
const routes = require('./routes/APIroutes');

function main() {

    const app = express();

    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    const port = 5050;
    
    app.use(express.json());
    app.use('/',routes);

    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`);
    })
}

module.exports = main();