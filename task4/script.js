const TextChange = document.querySelector('#Text');

TextChange.addEventListener('click', (event) => {
   const result = prompt('Введите новый текст:', '');
    TextChange.textContent = result;
    event.preventDefault(); 
});


