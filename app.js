const newName = document.getElementById
('new');

const inputName = document.getElementById 
('input');

const changeName = document.getElementById 
('change');

/* const someWords = myInput.value */

changeName.addEventListener('click', () => {
    // post-click logic goes here!
    newName.textContent = inputName.value;

    console.log(newName);
});

