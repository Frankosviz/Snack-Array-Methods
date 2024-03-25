// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


const biciclette = [
    {
        nome: 'Mountain bike',
        peso: 10
    },
    {
        nome: 'Road bike',
        peso: 5
    },
    {
        nome: 'Hybrid bike',
        peso: 7
    },
    {
        nome: 'Gravel',
        peso: 2
    },
    {
        nome: 'Cinzia',
        peso: 40
    },
    {
        nome: 'E-Velo',
        peso: 5
    },
];


const biciPiuLeggera = biciclette.reduce((biciPiuLeggera, bici) => {
    if (biciPiuLeggera.peso < bici.peso) {
        return biciPiuLeggera;

    } else {
        return bici;
    }
});

console.log(biciPiuLeggera);



