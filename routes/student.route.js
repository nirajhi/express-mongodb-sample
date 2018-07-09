const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const student_controller = require('../controllers/student.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/add', student_controller.add);
router.get('/show', student_controller.show_all_students);
router.get('/:id',student_controller.student_detail);

router.get('/', student_controller.default);


module.exports = router;