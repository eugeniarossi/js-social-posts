# Social Posts
nome repo: js-social-posts

## Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito il nostro script JS.

### Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: 
- id del post, numero progressivo da 1 a n
- nome autore, 
- foto autore, 
- data in formato americano (mm-gg-yyyy), YYYY-mm-gg //2023-03-10

gg-mm-yyyy 10-03-2023
mm-gg-yyyy 03-10-2023

- testo del post, 
- immagine (non tutti i post devono avere una immagine), 
- numero di likes.

Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

### Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

### Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. 

### BONUS
- Formattare le date in formato italiano (gg/mm/aaaa)
- Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Gaetano Frascolla > GF).
- Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. 

### Consigli del giorno
Ragioniamo come sempre a step.
- Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
- console.log() è nostro amico.
- Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

Buon lavoro!