const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    nameLabel.textContent = event.currentTarget.value;
    if (nameLabel.textContent.length === 0) {
        return nameLabel.textContent = 'незнакомец';
    }; 
}



// Если длинна введенного текста в инпуте меньше или равна 0, 
// то нужно чтоб был незнакомец.