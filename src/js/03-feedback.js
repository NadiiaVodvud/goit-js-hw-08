import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: form.email.value,
  message: form.message.value,
};

fillFormTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);
}

function fillFormTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveMessage) {
    form.value = saveMessage;
  }
}
