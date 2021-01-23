<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# JavaScript - Opdrachten

## Bart Duisters

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Class

Wat is een class?

Wat gebeurt er wanneer een instantie van een class gemaakt wordt?

Wat is een constructor-methode?

## omschrijven

### Opdracht 1

Omschrijf onderstaande code. Schrijf enkel uitleg bij de regels met een comment. Het gaat altijd over de regel onder de comment.

```js
// 1.
class Student {
    // 2.
    voornaam;
    // 3.
    achternaam;
    
    // 4.
    volledigeNaam() {
        let volledigeNaam = '';

        if (this.voornaam) {
            volledigeNaam += this.voornaam;
        }

        if (this.achternaam) {
            if (volledigeNaam.length > 0) {
                volledigeNaam += ' ';
            }
            volledigeNaam += this.achternaam;
        }
        
        return volledigeNaam;
    }
}

/*
* 5. 
* Toekennen van ... variabele genaamd student.
* De waarde is ...
* Het type is ...
*/
let student = new Student();
student.voornaam = 'John';
student.achternaam = 'Duck';
console.log(student.volledigeNaam());

let studentEnkelVoornaam = new Student();
studentEnkelVoornaam.voornaam = 'John';
console.log(studentEnkelVoornaam.volledigeNaam());

let studentEnkelAchternaam = new Student();
studentEnkelAchternaam.achternaam = 'Duck'
console.log(studentEnkelAchternaam.volledigeNaam());
```

## Schrijven

### Opdracht 1

Begin vanaf de code uit het onderdeel 'Class - Omschrijven - Opdracht 1':
- Zorg ervoor dat er gebruik gemaakt wordt van een constructor-methode.
- Maak gebruik van parameters in de constructor-methode om de properties een waarde toe te kennen.
- Schrijf de code om zodat de properties gezet worden tijdens het aanmaken van de instantie 
(in plaats van de properties een waarde toe te kennen nadat er een instantie gemaakt is).

### Opdracht 2

Maak een class om onderstaande objecten op te bouwen.
Gebruik instanties van de class om de objecten aan de variabelen toe te kennen.

```js
const ferrari = {
    merk: 'Ferrari',
    type: 'F50'
}

const lamborghini = {
    merk: 'Lamborghini',
    type: 'Diablo'
}

const opel = {
    merk: 'Opel',
    type: 'Manta'
}
```
