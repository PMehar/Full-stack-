const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
// const User = require('./models/user');
// const Expence = require('./models/expence');

var cors = require('cors');

const app = express();

app.use(cors());

const userRoutes = require('./routes/user');
const expenceRoutes = require('./routes/expence');

app.use(bodyParser.json({ extended: false}));

app.use('/user', userRoutes);
app.use('/expence', expenceRoutes);


sequelize
.sync()
.then(result =>{
    // console.log(result);
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});


