const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const adminRoute = require('./routes/admin');
//const shopRoute = require('./routes/shop');
const productController = require('./controllers/error');



const app= express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
    // User.findByPk(1).then(user=> {
    //     req.user = user;
    //     next();
    // }).catch(err=>console.log(err));
    next();
});

app.use('/admin', adminRoute);
//app.use(shopRoute);
app.use(productController.get404);


mongoConnect(()=>{
    app.listen(3000);
});



