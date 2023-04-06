import Lodash from 'lodash.throttle';
const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
  email: document.querySelector('input[name=email]'),
  message: document.querySelector('textarea[name=message]'),
};

refs.form.addEventListener('input', throttle(foundEvent, 300));
refs.submit.addEventListener('click', getSubmitEvent);

function foundEvent(event) {
  if (event.currentTarget) {
    const {
      elements: { email, message },
    } = event.currentTarget;

    if (
      email.value !== ''
    ) {
      const feedbackState = { email: email.value, message: message.value };
      saveFeedbackValue(feedbackState);
      // console.log(feedbackState);
    }
  }
}

function saveFeedbackValue(feedbackState) {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}

function reloadedPage() {
  try {
    const feedbackValue = localStorage.getItem('feedback-form-state');
    const GetParsefeedbackValue = JSON.parse(feedbackValue);
    refs.email.value = GetParsefeedbackValue.email || '';
    refs.message.value = GetParsefeedbackValue.message || '';
  } catch (error) {}
}

window.onload = function () {
  const loaded = sessionStorage.getItem('loaded');
  if (loaded) {
    reloadedPage();
  } else {
    sessionStorage.setItem('loaded', true);
  }
};

function getSubmitEvent(event) {
  if (event.target.type === 'submit') {
    event.preventDefault();

    auditFormValue();

    if (localStorage.getItem('feedback-form-state') === null) {
      return;
    }
    const feedbackValue = localStorage.getItem('feedback-form-state');
    const GetParsefeedbackValue = JSON.parse(feedbackValue);
    console.log(GetParsefeedbackValue);
    localStorage.removeItem();
  }
}

function auditFormValue() {
  if (
    refs.email.value === '' || refs.message.value === '')
    alert("Поля 'Email' або 'Message' не можуть бути пустими" )
   {
    resetFormValue();
  }
  
}

function resetFormValue() {
  refs.email.value = '';
  refs.message.value = '';
}
