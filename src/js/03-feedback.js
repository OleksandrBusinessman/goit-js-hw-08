import throttle from 'lodash.throttle';

const FEEDBACK_FS = 'feedback-form-state';

let userData = {};

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

fillInputs();

function onFormInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FS, JSON.stringify(userData));
}

function fillInputs() {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FS));
  if (savedData) {
    input.value = savedData.email || '';
    textarea.value = savedData.message || '';
    userData = savedData;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FS);
  console.log(userData);
  userData = {};
}