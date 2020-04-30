
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('strains').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        { strain: 'Wappa', effect: 'Relaxed, Euphoric, Happy, Uplifted, Sleepy', medical_effect: 'Depression, Insomnia, Pain, Stress, Inflammation', flavor: 'Earthy, Flowery, Sweet', type: 'hybrid', thc: '10grams', cbd: '10grams', description: 'Wappa is a 60% indica-dominant hybrid bred by Paradise Seeds that delivers happy, uplifting effects alongside an intense fruity flavor.' },
        { strain: 'Voodoo', effect: 'Hungry, Euphoric, Happy, Energetic, Uplifted', medical_effect: 'Depression, Pain, Stress, Nausea, Inflammation', flavor: 'Nutty, Spicy/Herbal, Citrus', type: 'sativa', thc: 'over 9000', cbd: '1gram', description: 'Voodoo, bred from a Thai landrace in 1997, is an uplifting sativa cannabis strain with long-lasting, euphoric effects. A fresh, fruity aroma emanates from the dense, pine-green buds enameled in crystal trichomes, with nutty and spicy flavors to follow. Depression, fatigue, and stress stand no chance against the uplifting, almost energizing, qualities of Voodoo. This strain prospers both indoors and outdoors, and flowers 8 to 9 weeks after its vegetative cycle' },
        { strain: 'Trinity', effect: 'Relaxed, Euphoric, Happy, Focused, Aroused', medical_effect: 'Depression, Pain, Stress, Nausea, Headache, Headaches', flavor: 'Pungent, Earthy, Skunk', type: 'sativa', thc: '30grams', cbd: '15grams', description: 'A rumored hard to find strain, Trinity is known to have a strong skunk-like smell with an uplifting high.' },
        { strain: 'Lucid Dream', effect: 'Euphoric, Happy, Energetic, Uplifted, Giggly', medical_effect: 'Euphoric, Happy, Energetic, Uplifted, Giggly', flavor: 'Sweet, Blueberry, Berry', type: 'hybrid', thc: '60grams', cbd: '25grams', description: 'it taste good i guess' }
      ]);
    });
};
