const db = require('../data/db-config')

module.exports = {
    getStrains,
    getStrainById,
    getSaved,
    saveStrain,
    updateSaved,
    removeSaved,
    findSavedById,
}

function getStrains() {
    return db('strains')
}

function getStrainById(id) {
    return db('strains')
        .where({ id })
}

function getSaved(id) {
    return db('users')
        .select('saved.strain', 'saved.effect', 'saved.medical_effect', 'saved.flavor', 'saved.type', 'saved.thc', 'saved.cbd', 'saved.description', 'saved.score', 'saved.reccomendation')
        .join('saved', 'users.id', 'saved.user_id')
}

async function saveStrain(body) {
    const [id] = await db("saved").insert(body, "id");

    return findSavedById(id)
}

function updateSaved(id, change) {
    return db('saved')
        .where({ id })
        .update(change)
}

function removeSaved(id) {
    return db('saved')
        .where({ id })
        .del()
}

function findSavedById(id) {
    return db('saved')
        .where({ id })
}