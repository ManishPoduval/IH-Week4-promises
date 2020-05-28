let express = require('express')
let app = express();



function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let students = require('./data.js')
            resolve(students)
        }, 2000)
    })
    return myPromise;
}



//let express know what template engine you're using.
app.set('view engine', 'hbs');

//set the middleware to let express know where the static files are located
app.use(express.static('public'))

//define the routes
app.get('/', (req, res) => {
    // .render always for a template engine
    res.render(__dirname + '/views/landing.hbs', {layout: false});
})

app.get('/home', (req, res) => {
    res.render(__dirname + '/views/home.hbs');
})

app.get('/about', (req, res) => {
    res.render(__dirname + '/views/about.hbs');
})

//create the server on port 3000
app.listen('3000', () => {
    console.log(`Example app listening at http://localhost:3000`)
})