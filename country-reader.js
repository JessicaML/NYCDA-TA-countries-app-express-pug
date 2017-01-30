const fs = require('fs');

var users = JSON.parse(fs.readFileSync('countries.json'));

module.exports = {
  getUsers: function() {
    return users;
  },

};
