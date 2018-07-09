const Student = require('../models/student.model');

//Simple version, without validation or sanitation


exports.add = function (req, res) {
    let student = new Student(
        {
            name: req.body.name,
            age: req.body.age
        }
    );


    student.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.send('Student Created successfully')
    })
};

exports.show_all_students = function(req, res){
  //res.send("Successful");
   Student.find( function (err, student) {
    if (err) return res.send(err);
    res.send(student);
   });

};

exports.student_detail = function (req, res) {
    Student.findById(req.params.id, function (err, product) {
        if (err) return res.send(err);
        res.send(product);
    })
};



exports.default = function (req, res) {
    res.send('Error 404');
};


