const express = require('express');

const userController = require('../controllers/user');

const expenceController = require('../controllers/expence');

const router = express.Router();

router.post('/add-user',userController.addUser);

router.get('/get-users' , userController.getUser );

router.delete('/delete-user/:id' , userController.deleteUser );

router.post('/add-expence',expenceController.addExpence);

router.get('/get-expences' , expenceController.getExpence );

// router.get('/edit-expence/:id', expenceController.getEditExpence);

// router.post('/edit-expence', expenceController.postEditExpence);

router.delete('/delete-expence/:id' , expenceController.deleteExpence );

module.exports = router;
