var router = require('express').Router()
const {getNotes} = require('../helpers/helpers')

// /api/notes
router.get('/notes', (req, res) => {
    getNotes()
        .then((notes) => {
            console.log('in get route', notes)
            res.json(notes)
        })
})

module.exports = router
