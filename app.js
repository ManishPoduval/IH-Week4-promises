let express = require('express')
let app = express();

//let express know what template engine you're using.
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Hey you\'re in landing page')
})

app.get('/home', (req, res) => {
    res.send('In home page')
})

app.get('/about', (req, res) => {
    res.send('In about page!!!!!')
})

app.listen('3000', () => {
    console.log(`Example app listening at http://localhost:3000`)
})