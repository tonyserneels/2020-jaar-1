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

# Class - static

## Schrijven

Maak een class genaamd `Calculator`.

Voorzie vier `static methods`:
- som
- verschil
- delen
- vermenigvuldigen

Voorzie een `static property`:
- PI (met als waarde het nummer 3.141592)

Vertrek vanuit onderstaande code:
```js
class Calculator {

}

console.log(Calculator.som(3, 3)); // Dit moet 6 loggen
console.log(Calculator.verschil(3, 2)); // Dit moet 1 loggen
console.log(Calculator.delen(6, 2)); // Dit moet 3 loggen
console.log(Calculator.vermenigvuldigen(3, 3)); // Dit moet 9 loggen
console.log(Calculator.PI); // Dit moet 3.141592 loggen
```

# Class - extends & super

## Schrijven

### Oefening 1

#### Deel 1

Refactor onderstaande code zodat er gebruik gemaakt wordt van classes.
Zorg voor een class genaamd 'Cursist' en een class genaamd 'Docent'.

```js
const cursist1 = {
    naam: 'Yoeri',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist2 = {
    naam: 'Marvi Hendriks',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist3 = {
    naam: 'Simone :P',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist4 = {
    naam: 'Domenico',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist5 = {
    naam: 'Marco',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist6 = {
    naam: 'Michelle',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist7 = {
    naam: 'Romy',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist8 = {
    naam: 'Jorg',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist9 = {
    naam: 'Tony $erneel$',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist10 = {
    naam: 'Ian',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist11 = {
    naam: 'Angelique',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const cursist12 = {
    naam: 'Arne',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`
    }
}

const docent1 = {
    naam: 'Bart',
    motto: '25 is grappiger dan 24',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`;
    },
    motto: () => {
        return `Mijn motto is: ${this.motto}`;
    }
}

const docent2 = {
    naam: 'Mark',
    motto: '24 is grappiger dan 25',
    begroeting: () => {
        return `Hallo, ik ben ${this.naam}!`;
    },
    motto: () => {
        return `Mijn motto is: ${this.motto}`;
    }
}
``` 

#### Deel 2

Ga verder op de oplossing uit deel 1, zorg voor een algemene class genaamd `Persoon`.

Zowel de class `Cursist` en `Docent` zullen overerven van `Persoon`.

Zet alle gemeenschappelijke properties en methodes in de `super class`.