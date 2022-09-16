console.log('May Node be with you');

const { request, response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

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
}

// Body-parser is a middleware that helps tidy up the request object before we use them. Express lets us use middleware with the use method.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    // response.send('Hello World');
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    if (rappers[rapperName]) {
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown']);
    }
})

// app.post('/quotes', (request, response) => {
//     console.log(request.body);
// })

app.listen(3000, function() {
    console.log(`listening on port ${3000}`);
});