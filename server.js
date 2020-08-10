const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const appRoutes = require('./expressRoutes/appRoutes');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.db).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/employees', appRoutes);
    
    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });