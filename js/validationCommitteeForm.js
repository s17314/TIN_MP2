function validateForm() {
  const nameInput = document.getElementById('name');
  const membersInput = document.getElementById('members');
  const difficultyInput = document.getElementById('difficulty');

  const errorName = document.getElementById('errorName');
  const errorMembers = document.getElementById('errorMembers');
  const errorDifficulty = document.getElementById('errorDifficulty');
  const errorsSummary = document.getElementById('errorsSummary');

  resetErrors([nameInput, membersInput, difficultyInput], [errorName, errorMembers, errorDifficulty], errorsSummary);

  let valid = true;

  if (!checkRequired(nameInput.value)) {
    valid = false;
    nameInput.classList.add("error-input");
    errorName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
    valid = false;
    nameInput.classList.add("error-input");
    errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(membersInput.value)) {
    valid = false;
    membersInput.classList.add("error-input");
    errorMembers.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(membersInput.value, 1, 1)) {
    valid = false;
    membersInput.classList.add("error-input");
    errorMembers.innerText = "Pole powinno zawierać wartość od 1 do 9";
  }

  if (!checkRequired(difficultyInput.value)) {
    valid = false;
    difficultyInput.classList.add("error-input");
    errorDifficulty.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(difficultyInput.value, 2, 60)) {
    valid = false;
    difficultyInput.classList.add("error-input");
    errorDifficulty.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;

}

