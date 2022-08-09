const express = require('express');
// this is the syntax to use: const abc = require('../introduction/intro')
const firstModule = require('../logger/logger')
const firstHelper = require('../util/helper')
const stringchange = require('../validator/formatter')


const router = express.Router();

router.get('/movies', function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies);
});



router.get("/movies/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    let ourmovie = movies[movieIndex]
    res.send(ourmovie)
});


router.get("/movies/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber

    if (movieIndex < 0 || movieIndex >= movies.length) {
        return req.send('invalid input try again')
    }
    let ourmovie = movies[movieIndex]
    res.send(ourmovie)
});

router.get("/films", function (req, res) {
    [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    res.send(films)

})


router.get("/films/:filmId", function (req, res) {
    [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            return res.send(film)
        }
    }
    res.send("invaild film id")
})


module.exports = router;
// adding this comment for no reason