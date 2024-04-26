// Selecteer de 'ul' element van de pagina
const ul = document.querySelector('ul');

// Selecteer alle 'img' elementen van de pagina
const images = document.querySelectorAll('img');

// Stel de limiet in voor het aantal afbeeldingen dat moet worden opgehaald
const limit = 20;

// Stel de offset in voor het pagineren van de afbeeldingen
let offset = 0;

// Functie om afbeeldingen op te halen van de API
const imageFunction = async () => {
    // Bouw de URL voor de API-aanvraag
    let url = `https://api.nekosapi.com/v3/images?limit=${limit}&offset=${offset}&rating=safe`;

    // Schakel de laadindicator in
    ul.classList.toggle('loading');

    // Maak de bron van alle afbeeldingen leeg
    images.forEach(image => image.src = '');

    // Haal de gegevens op van de API
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    // Stel de bron van elke afbeelding in op de URL van de opgehaalde afbeelding
    data.items.forEach((item, index) => {
        images[index].src = item.image_url;
    });

    // Schakel de laadindicator uit
    ul.classList.toggle('loading')

    // Verhoog de offset voor de volgende pagina met afbeeldingen
    offset += 20;
};

// Roep de functie aan om de eerste set afbeeldingen op te halen
imageFunction();

// Voeg een event listener toe aan de knop om meer afbeeldingen op te halen wanneer erop wordt geklikt
document.querySelector('button').addEventListener('click', imageFunction);