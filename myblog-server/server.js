const express = require('express');
const cors = require('cors');

let corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4000']
}

const app = express();
app.use(cors(corsOptions));

app.listen(8000, () => {
    console.log('Node.js server is started and listening');
});

app.get('/', (request, response) => {
    response.send('<h2>Node.js work fine!!!</h2>');
})

require('./articles.js')(app);
