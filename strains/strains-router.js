const router = require('express').Router()

const db = require('./strains-model')

router.get('/strains', (req, res) => {
    console.log(req.decodedToken)
    db.getStrains()
        .then(strains => {
            console.log(strains)
            res.status(200).json(strains)
        })
        .catch(err => {
            res.status(500).json({ error: err.message, message: 'server error getting the list of strains' })
        })
})

router.get('/strains/:id', (req, res) => {
    db.getStrainById(req.params.id)
        .then(strain => {
            res.status(200).json(strain)
        })
        .catch(err => {
            res.status(500).json({ error: err.message, message: 'could not find requested strain' })
        })
})

router.get('/saved', (req, res) => {
    db.getSaved(req.decodedToken.userId)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(err => {
            res.status(500).json({ error: err.message, message: 'server error getting the list of strains' })
        })
})

router.get('/saved/:id', (req, res) => {
    if (req.params.id) {
        db.findSavedById(req.params.id)
            .then(strain => {
                res.status(200).json(strain)
            })
            .catch(err => {
                res.status(500).json({ error: err.message, message: 'unable to find the strain' })
            })
    } else {
        res.status(400).json({ message: 'to find a strain please provide strain data' })
    }
})

router.post('/saved', (req, res) => {
    console.log(req.decodedToken)
    if (req.body) {

        req.body.user_id = req.decodedToken.userId
        req.body.id = null

        db.saveStrain(req.body)
            .then(strain => {
                res.status(201).json(strain)
            })
            .catch(err => {
                res.status(500).json({ error: err.message, message: 'unable to save the strain' })
            })
    } else {
        res.status(400).json({ message: 'to save a strain please provide strain data' })
    }
})

router.put('/saved/:id', (req, res) => {
    if (req.params.id) {
        if (req.body) {
            db.updateSaved(req.params.id, req.body)
                .then(() => {
                    res.status(200).json({ message: 'saved strain successfully updated' })
                })
                .catch(err => {
                    res.status(500).json({ error: err.message, message: 'server could not update the saved strain' })
                })
        } else {
            res.status(400).json({ message: 'to save a strain please provide strain data' })
        }
    } else {
        res.status(400).json({ message: 'please provide an id of the strain to be saved' })
    }
})

router.delete('/saved/:id', (req, res) => {
    if (req.params.id) {
        db.removeSaved(req.params.id)
            .then(() => {
                res.status(200).json({ message: 'saved strain successfully deleted' })
            })
            .catch(err => {
                res.status(500).json({ error: err.message, message: 'server could not delete the saved strain' })
            })
    } else {
        res.status(400).json({ message: 'please provide an id of the saved strain to be deleted' })
    }
})

module.exports = router