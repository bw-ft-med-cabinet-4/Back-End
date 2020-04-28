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
        .select('saved.id', 'strains.strain', 'strains.effect', 'strains.medical_effect', 'strains.flavor', 'strains.type', 'strains.thc', 'strains.cbd', 'strains.description')
        .join('saved', 'users.id', 'saved.user_id')
        .join('strains', 'strains.id', 'saved.strain_id')
        .where('users.id', id)
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