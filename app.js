const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/uploads'));

require('./routes/index')(app);
require('./routes/admin')(app);

app.listen(3000, () => {
    console.log(`Server is running in: http://localhost:3000`);
});
