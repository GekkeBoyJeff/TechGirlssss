//// dropdown filter items
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
            const dropdown = button.nextElementSibling;
            const parent = button.closest('.filter-dropdown');
            const icon = button.querySelector('svg');
            dropdown.classList.toggle('show-dropdown');
            dropdown.classList.toggle('hide-dropdown');
            icon.classList.toggle('icon-rotate');
            parent.classList.toggle('expanded');
        });
    });
});

/*
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Functie om de breedte van de filterknoppen aan te passen op basis van de inhoud van de dropdown-items
    function adjustButtonWidths() {
      filterButtons.forEach(button => {
        const dropdown = button.nextElementSibling;
        if (dropdown && dropdown.classList.contains('filter-dropdown-items')) {
          const dropdownWidth = dropdown.getBoundingClientRect().width;
          button.style.width = `${dropdownWidth}px`;
        }
      });
    }

    // Roep de functie aan wanneer de pagina is geladen
    adjustButtonWidths();

    // Roep de functie aan wanneer het formaat van het venster verandert
    window.addEventListener('resize', adjustButtonWidths);
  });
  */


document.addEventListener('DOMContentLoaded', () => {
    // Code hier wordt uitgevoerd wanneer de DOM volledig is geladen
});

function updateCheckboxesFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const paramName = checkbox.getAttribute('name');
        const paramValue = urlParams.get(paramName);

        if (paramValue !== null) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

function updateURLFromCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const urlParams = new URLSearchParams();

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const paramName = checkbox.getAttribute('name');
            const paramValue = checkbox.value;
            urlParams.set(paramName, paramValue);
        }
    });

    window.history.replaceState({}, '', `${location.pathname}?${urlParams.toString()}`);
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateURLFromCheckboxes);
});

updateCheckboxesFromURL();


/* local storage*/

// // Functie om checkbox status op te slaan in localStorage
// function saveCheckboxStatus(className, status) {
//     localStorage.setItem(`checkbox_${className}`, status);
// }

// // Functie om checkbox status te laden uit localStorage
// function loadCheckboxStatus(className) {
//     return localStorage.getItem(`checkbox_${className}`) === 'true';
// }

// /// functie om de URL parameters te lezen 
// function getURLParams() {
//     const params = new URLSearchParams(window.location.search);
//     const data = {};
//     params.forEach((value, key) => {
//         if (!data[key]) {
//             data[key] = []

//         }
//         data[key].push(value);
//     });
//     return data;
// }

//  Functie om de status van knoppen en checkboxes te initialiseren bij het laden van de pagina
function initializeCheckboxes() {
    document.querySelectorAll('.filter-dropdown button[data-checkbox]').forEach(button => {
        const checkboxClass = button.getAttribute('data-checkbox');
        const checkbox = document.querySelector(`input.${checkboxClass}`);

        if (checkbox) {
            const status = loadCheckboxStatus(checkboxClass);
            checkbox.checked = status;
            button.classList.toggle('active', status);
        }
    });
}

// Event listener voor filter knoppen
document.querySelectorAll('.filter-dropdown button[data-checkbox]').forEach(button => {
    button.addEventListener('click', () => {
        const checkboxClass = button.getAttribute('data-checkbox');
        const checkbox = document.querySelector(`input.${checkboxClass}`);

        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            button.classList.toggle('active', checkbox.checked);
            saveCheckboxStatus(checkboxClass, checkbox.checked);
        }
    });
});

// Event listener voor dropdown knoppen
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        button.setAttribute('aria-expanded', !expanded);
    });
});


// Initialiseer de checkboxes bij het laden van de pagina
document.addEventListener('DOMContentLoaded', initializeCheckboxes);