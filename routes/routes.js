const express = require('express');
const router = express.Router();
const db = require('../models');
const fs = require('fs');
const csvToJson = require('csvtojson'); 
const { Parser } = require('json2csv');


//CSV TO JSON into database
router.get('/insert', (req,res) => {
    const csvPath = `${__dirname}/../csv_data/Input_people.csv`;
    console.log(csvPath);
    csvToJson().fromFile(csvPath)
     .then(jsonData => {
         //console.log(jsonData);
        db.mytable.bulkCreate(jsonData).then(() => {
            console.log('Data inserted successfully!!');
            res.send('Data inserted successfully!!');
        })
});
})


//JSON To CSV from database
router.get('/fetch', (req,res) => {
    db.mytable.findAll().then(data => {
        const fields = ['id','name','phone','email','currency','country'];
    
        const json2csvParser = new Parser({fields});
        const csv = json2csvParser.parse(data);
        fs.writeFile(`${__dirname}/../csv_data/Fetched_people.csv`, csv, function(err) {
            if(err) throw err;
            console.log('Data fetched successfully!!');
            res.send('Data fetched successfully!!');
        });
    
    })
})

module.exports = router;