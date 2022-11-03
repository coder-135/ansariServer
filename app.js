const express = require('express');
const cors = require('cors');
const config = require('./utils/initializer');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const serviceNames = fs.readdirSync('./services');
app.use('/uploads', express.static(__dirname + '/uploads/'));
app.use(morgan('dev'));
const path = require('path');

app.use(express.json({ limit: '50mb' }));

app.use(cors());



serviceNames.forEach(serviceName => {
    const service = require(`./services/${serviceName}/routes.js`)
    app.use('/api', service)
});

app.use((req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.all("*", (req, res) => {
    res.status(404).json({
        message: "آدرس مورد نظر یافت نشد",
    });
});


if (dotenv.error) {
    throw dotenv.error;
}


// run initial config
config.Initialize().then(() => console.log('mongodb connected successfully'));

//run server
const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});