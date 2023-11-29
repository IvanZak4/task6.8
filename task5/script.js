const input = document.querySelector('input');

const sec = document.querySelector('#duplicateField');

input.addEventListener('input', function() {
  sec.textContent = input.value;
})

const third = document.querySelector('button');

third.addEventListener('click', function(){
    console.log(input.value);
    document.querySelector("input").value = "";
    document.getElementById("duplicateField").textContent = "";
})