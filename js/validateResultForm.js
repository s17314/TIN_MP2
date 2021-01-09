function validateForm() {
  const studentInput = document.getElementById('student');
  const comitteeInput = document.getElementById('comittee');
  const dateInput = document.getElementById('date');
  const resultInput = document.getElementById('result');
  const gradeInput = document.getElementById('grade');

  const errorStudent = document.getElementById('errorStudent');
  const errorComittee = document.getElementById('errorComittee');
  const errorDate = document.getElementById('errorDate');
  const errorResult = document.getElementById('errorResult');
  const errorGrade = document.getElementById('errorGrade');
  const errorsSummary = document.getElementById('errorsSummary');

  resetErrors([studentInput, comitteeInput, dateInput, resultInput, gradeInput], [errorStudent, errorComittee, errorDate, errorResult, errorGrade], errorsSummary);

  let valid = true;

  if (!checkRequired(studentInput.value)) {
    valid = false;
    studentInput.classList.add("error-input");
    errorStudent.innerText = "Wybierz studenta z listy";
  }

  if (!checkRequired(comitteeInput.value)) {
    valid = false;
    comitteeInput.classList.add("error-input");
    errorComittee.innerText = "Wybierz komisję z listy";
  }

  if (!checkRequired(dateInput.value)) {
    valid = false;
    dateInput.classList.add("error-input");
    errorDate.innerText = "Wybierz datę";
  }

  if (!checkRequired(resultInput.value)) {
    valid = false;
    resultInput.classList.add("error-input");
    errorResult.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(resultInput.value, 2, 60)) {
    valid = false;
    resultInput.classList.add("error-input");
    errorResult.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(gradeInput.value)) {
    valid = false;
    gradeInput.classList.add("error-input");
    errorGrade.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(gradeInput.value, 1, 1)) {
    valid = false;
    gradeInput.classList.add("error-input");
    errorGrade.innerText = "Pole powinno zawierać wartość od 2 do 4";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;

}

