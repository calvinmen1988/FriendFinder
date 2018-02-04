// Start of routes

var survey = require ("../data/friends");

module.exports = function (app) {

// DeVON, GET THE TABLES! (this pulls data from the waitinglist)
app.get("/friends", function(req, res) {
    res.json (friends);
   });

//posting from survey after submit on survey.html
app.post("/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
};
