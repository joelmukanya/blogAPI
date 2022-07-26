const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 
    'bnwntgfcvfbubllljwvi-mysql.services.clever-cloud.com', 
    user: 'u49lku0etoop0on1',
    password: 'w4EKxj5QjB7xwmdQpPzn',
    database: 'bnwntgfcvfbubllljwvi',
    multipleStatements: true
});
// Connect
connection.connect((err)=> {
    if(err) throw err 
})

module.exports = connection;