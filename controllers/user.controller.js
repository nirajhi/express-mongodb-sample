const User = require('../models/user.model');



exports.default = function (req, res) {
    res.send('Greetings from the User controller!');
};

//Simple version, without validation or sanitation
exports.register = function (req, res) {
    if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          passwordConf: req.body.passwordConf,
        }
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return res.send(err);
          } else {
            return res.send(user);
          }
        });
      }
   // res.send('Error');

};


