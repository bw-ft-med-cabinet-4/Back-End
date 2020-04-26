
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username').notNullable().unique()
            tbl.string('password').notNullable()
        })
        .createTable('strains', tbl => {
            tbl.increments()
            tbl.string('strain').notNullable().unique()
            tbl.string('effect').notNullable()
            tbl.string('medical_effect').notNullable()
            tbl.string('flavor').notNullable()
            tbl.string('type').notNullable()
            tbl.string('thc').notNullable()
            tbl.string('cbd').notNullable()
            tbl.string('description').notNullable()
        })
        .createTable('saved', tbl => {
            tbl.increments()
            tbl.string('strain').notNullable().unique()
            tbl.string('effect').notNullable()
            tbl.string('medical_effect').notNullable()
            tbl.string('flavor').notNullable()
            tbl.string('type').notNullable()
            tbl.string('thc').notNullable()
            tbl.string('cbd').notNullable()
            tbl.string('description').notNullable()
            tbl.float('score').notNullable()
            tbl.integer('reccomendation').notNullable()

            tbl.integer('user_id').notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('saved')
        .dropTableIfExists('strains')
        .dropTableIfExists('users')
};
