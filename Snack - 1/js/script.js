// Snack 1

// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo (tableName),
// nome dell'ospite (guestName),
// posto occupato (place),
// Generiamo e stampiamo in console la lista per i segnaposto.


const tavoloVip = {
    nome: "Tavolo Vip",
    invitati: [
        'Brad Pitt', 
        'Johnny Depp', 
        'Lady Gaga', 
        'Cristiano Ronaldo', 
        'Georgina Rodriguez', 
        'Chiara Ferragni',  
        'George Clooney', 
        'Amal Clooney', 
        'Fedez', 
        'Amadeus', 
        'Fiorello'
    ]
}

tavoloVip.invitati.forEach((invitato, indice) => {
    console.log(`${indice + 1}. ${invitato}`);
});

tavoloVip.invitati.map((invitato, indice) => {
    const nuovaLista = [
        {
            postoOccupato : (indice),
            nomeOspite : (invitato),
            nomeTavolo : tavoloVip.nome
        }
    ]
    console.log(nuovaLista);
})





















