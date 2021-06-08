const body = document.getElementById('body');
const checkButton = document.getElementById('check');
const wachtWoord = document.getElementById('wachtwoord');
const newWachtwoord = wachtWoord.value;

const checkPassword = (newWachtwoord) => {
    body.classList.add("blue");
    body.classList.remove("red");
    verifyPassword(newWachtwoord);
    setTimeout(() => {
        body.classList.remove("blue");
        if (verifyPassword == true) {
            body.classList.add("green");
        } else {
            body.classList.add("red");            
        }
    }, 1000);
};

checkButton.addEventListener('click', () => checkPassword(newWachtwoord));