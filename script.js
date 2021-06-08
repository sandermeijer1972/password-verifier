const body = document.getElementById('body');
const checkButton = document.getElementById('check');
const problems = document.getElementById('fout');

const checkProblem = (password) => {
    if (hasRightLength(password) == false) {
        const tooLong = document.createElement('li');
        tooLong.innerText = "- wachtwoord is te lang";
        problems.appendChild(tooLong);
    };
    if (hasUpperCaseCharacter(password) == false) {
        const noUpperCase = document.createElement('li');
        noUpperCase.innerText = "- wachtwoord heeft geen hoofdletter";
        problems.appendChild(noUpperCase);
    };
    if (hasLowerCaseCharacter(password) == false) {
        const noLowerCase = document.createElement('li');
        noLowerCase.innerText = "- wachtwoord heeft geen kleine letter";
        problems.appendChild(noLowerCase);
    };
    if (hasDigit(password) == false) {
        const noDigit = document.createElement('li');
        noDigit.innerText = "- wachtwoord heeft geen cijfer";
        problems.appendChild(noDigit);
    };
};

const checkPassword = () => {
    const wachtWoord = document.getElementById('wachtwoord').value;
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    problems.innerHTML = "";
    if (verifyPassword(wachtWoord) == true) {
        body.classList.add("green");
    } else {
        body.classList.add("red");
        checkProblem(wachtWoord);         
    };
};

checkButton.addEventListener('click', () => checkPassword());