
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('strains').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        { strain: 'rowValue1', effect: 'rowValue1', medical_effect: 'rowValue1', flavor: 'rowValue1', type: 'rowValue1', thc: 'rowValue1', cbd: 'rowValue1', description: 'rowValue1' },
        { strain: 'rowValue2', effect: 'rowValue2', medical_effect: 'rowValue2', flavor: 'rowValue2', type: 'rowValue2', thc: 'rowValue2', cbd: 'rowValue2', description: 'rowValue2' },
        { strain: 'rowValue3', effect: 'rowValue3', medical_effect: 'rowValue3', flavor: 'rowValue3', type: 'rowValue3', thc: 'rowValue3', cbd: 'rowValue3', description: 'rowValue3' }
      ]);
    });
};
