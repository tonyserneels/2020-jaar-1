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

# Command line & git - cheat sheet

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

# Command line

##  Belangrijke aliassen

Een alias is een andere, vaak kortere, manier om iets uit te voeren. Een lijst van de belangrijkste aliassen:

### ~
De tilde, dit staat voor 'home directory', dit is de directory/folder/map van de gebruiker waaruit vertrokken wordt.
In Windows is dit /c/Users/Gebruiker (waarbij Gebruiker de gebruikersnaam is van de ingelogde gebruiker en waarbij c staat voor de schijf C:/).  
In Linux/Mac is dit /home/gebruiker (waarbij 'gebruiker' de gebruikersnaam is van de ingelogde gebruiker).
        
### .
Simpelweg één punt, dit is 'het pad waar ik momenteel ben'.
        
### ..
Twee punten, dit is 'het pad waar ik momenteel ben, maar dan één mapje hoger'.

### /
Een voorwaartse slash, dit staat voor 'de root', de basis van de mappenstructuur op het systeem.

## Belangrijke commando's

### ls
**L**i**S**t - oplijsten van alle bestanden en mappen
    vb. ```ls```, ```ls -a``` (de ```-a``` zorgt ervoor dat ook verborgen items getoond worden)
    
### cd
**C**hange **D**irectory - wijzigen van de directory/map
    vb. ```cd ~/Projects```, ```cd ..``` (combinatie van het commando ```cd``` met de alias ```..```, dit zorgt ervoor dat het pad één niveau hoger gaat)

### mkdir
**M**a**K**e **DIR**ectory - aanmaken van een map
    vb. ```mkdir Projects```, dit zal een map aanmaken in de huidige directory, genaamd 'Projects'
    
### touch
Aanmaken van een bestand, zodra je iets 'aanraakt' (touch), wordt het aangemaakt.
    vb. ```touch oefening1.js```, dit zal een bestand aanmaken in de huidige directory, genaamd 'oefening1.js'

### rm
**R**e**M**ove - verwijderen van een bestand of map
    vb. ```rm oefening1.js```, dit zal het bestand 'oefening1.js' verwijderen
           ```rm -r Projects/```, om mappen te verwijderen moet er een `flag` gebruikt worden `-r` (dit staat voor recursive/recursief)

# Git

## Git commando's

### git --help
Help mij met wat ik kan invoeren na het woord 'git'.

### git add <bestandsnaam>
Voeg de veranderingen van een bestand toe aan de 'staging area'. Zet de bestanden klaar om uiteindelijk te kunnen committen.
    vb. ```git add oefening1.js```
          ```git add .```, git add in combinatie met de alias `.`, dit zal alle veranderingen in de huidige directory toevoegen aan de 'staging area'.

### git commit -m "<bericht>"
Commit alle veranderen vanuit de staging area. Dit zal de veranderingen permanent toevoegen aan de log/geschiedenis/history in de .git directory.
