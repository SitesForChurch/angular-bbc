var express = require('express');
var router = express.Router();
var conf = require('../config/config');
var base = require('airtable').base(conf.airtable.base);
/* api */
router.get('/sermons', function(req, res, next) {
  var sermonsList = [];
  base('Sermons').select({
    // Selecting the first 3 records in Main View:
    maxRecords: 3,
    //view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {

    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      sermonsList.push(record._rawJson.fields);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(error) {
    if (error) {
      console.log(error);
    } else {
      res.json(sermonsList);
    }
  });
});

module.exports = router;
