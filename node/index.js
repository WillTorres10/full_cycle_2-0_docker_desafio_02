const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const faker = require('faker');


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config);
    const randomName = faker.name.findName();
    const sql = `INSERT INTO people(name) values("${randomName}")`;
    connection.query(sql);

    connection.query('select * from people;',function(err, rows, fields) {
        if (err) throw err;
        let result = "<h1>Full Cycle Rocks!</h1><br><ul>";
        rows.forEach(linha => {
            result += `<li>${linha.name}</li>`
        });
        result += "</ul>"
        res.send(result);
    });
    connection.end();
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
