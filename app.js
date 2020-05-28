let express = require('express')
let app = express();


// IGNORE THE CODE HERE --------
function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let students = require('./data.js')
            resolve(students)
        }, 2000)
    })
    return myPromise;
}

function getInstructors(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let instructors = require('./instructors')
            resolve(instructors)
        }, 2000)
    })
    return myPromise;
}
// ------------------------------


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
    getStudents()
        .then((students) => {
            res.render(__dirname + '/views/home.hbs', {students});
        })

})

app.get('/about', (req, res) => {
    getInstructors()
    .then((students) => {
        res.render(__dirname + '/views/about.hbs', {instructors});
    })

})

//create the server on port 3000
app.listen('3000', () => {
    console.log(`Example app listening at http://localhost:3000`)
})