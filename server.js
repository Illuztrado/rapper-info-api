console.log('May Node be with you');

const { request, response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    if (rappers[rapperName]) {
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown']);
    }
});

app.listen(process.env.PORT || PORT, function() {
    console.log(`listening on port ${PORT}`);
});