//establishing connection to DBs

var mysql = require('mysql');
var connection;

//connection for cloud9/mysql (app is currently deployed to heroku)
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "",
//     database: "burgers_db"
// });


//connection for heroku info comes from JAWs db (DBaaS provider) 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "k0nga33r4susw6t8",
        password: "h5jo1xdvfthysv7i",
        database: "gfcelxbnh92xwcyn"
    });
}


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
