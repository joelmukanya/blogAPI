// Importing modules
const express = require('express');
const db = require('./conn');
const cors = require('cors');
const bodyParser = require('body-parser');
// Create an express app
const app = express();
// Create a router
const router = express.Router();
// Port
const port = parseInt(process.env.port) || 4000;

// express.json(): It a middleware
app.use(router,cors(), express.json(), express.urlencoded({
    extended: true
}));

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

// Fetch data
// router.get('^/$|/blog', (req, res)=> {
//     // Query
//     const strQry = 
//     `
//     SELECT d.id, CONCAT(d.firstname, ' ', d.lastname) 'Doctor Fullname', d.dentistAge, 
//     d.contactNumb, d.practiceNumb, CONCAT(p.firstname, ' ', p.lastname) 'Patient Fullname', 
//     p.paymentMethods, p.medicalAid
//     FROM dentists d
//     INNER JOIN patients p
//     ON d.id = p.dentistid;
//     `;
//     db.query(strQry, (err, data)=> {
//         if(err) throw err;
//         // res.send(data);
//         res.json({
//             status: 200,
//             data: data
//         })
//     })
// });

// // Fetch one record
// /*
// SELECT d.id, CONCAT(d.firstname, ' ', d.lastname) 'Doctor Fullname', d.dentistAge, 
// d.contactNumb, d.practiceNumb
// */
// router.get('^/:id$|/clinic/:id', (req, res)=> {
//     // Query
//     const strQry = 
//     `
//     SELECT *
//     FROM dentists 
//     WHERE id = ?;
//     `;
//     db.query(strQry,[req.params.id], (err, data)=> {
//         if(err) throw err;
//         res.send(data);
//     })
// });

// //Post
// // Add a new record
// router.post('/clinic', bodyParser.json(), (req, res)=> {
//     const dnt = req.body;
//     // Query
//     const strQry = 
//     `INSERT INTO dentists(id, firstname, lastname,
//      dentistAge, contactNumb, practiceNumb)
//      VALUES (?, ?, ?, ?, ?, ?);`;

//     db.query(strQry,[dnt.id, dnt.firstname,
//         dnt.lastname, dnt.dentistAge, 
//         dnt.contactNumb, dnt.practiceNumb], (err, data)=> {
//         if(err) throw err;
//         res.send(`number of affected row/s: ${data.affectedRows}`);
//     })
// });
// /*
// {
//     "id": "JT36736254",
//     "firstname": "Joel",
//     "lastname": "Mukanya",
//     "dentistAge": 38,
//     "contactNumb": "9837652417",
//     "practiceNumb": "7365428765"
// }
// Result object:
// {
//   fieldCount: 0,
//   affectedRows: 5,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '\'Records:5  Duplicated: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// }
// */
// //Delete a record
// router.delete('/clinic/:id', (req, res)=> {
//     // Query
//     const strQry = 
//     `
//     DELETE FROM dentists 
//     WHERE id = ?;
//     `;
//     db.query(strQry,[req.params.id], (err, data, fields)=> {
//         if(err) throw err;
//         res.send(`${data.affectedRows} row was affected`);
//     })
// });
// // Update
// router.put('/clinic', bodyParser.json(), (req, res)=> {
//     const dnt = req.body;
//     // Query
//     const strQry = 
//     `UPDATE dentists
//      SET ?
//      WHERE id = ?`;

//     db.query(strQry,[dnt, dnt.id], (err, data)=> {
//         if(err) throw err;
//         res.send(`number of affected record/s: ${data.affectedRows}`);
//     })
// });


