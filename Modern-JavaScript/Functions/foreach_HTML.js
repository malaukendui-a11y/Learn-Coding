let orang = ['asot', 'banget', 'nih', 'boyot', 'bolong'];

const logPerson = (person, index => {
    console.log(`${index} - halow ${person}`)
})

orang.forEach(logPerson);

// orang.forEach ((person, index) => {
//     console.log(index, person);
// });