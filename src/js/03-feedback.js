import Lodash from 'lodash.throttle';
const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
  email: document.querySelector('input[name=email]'),
  message: document.querySelector('textarea[name=message]'),
};

refs.form.addEventListener('input', throttle(foundEvenet, 500));
refs.submit.addEventListener('click', getSubmitEvent);

function foundEvenet(event) {
  if (event.currentTarget) {
    const {
      elements: { email, message },
    } = event.currentTarget;

    if (
      email.value !== '' &&
      message.value !== '' &&
      email.value.includes('@')
    ) {
      const feedbackState = { email: email.value, message: message.value };
      saveFeedbackValue(feedbackState);
      console.log(feedbackState);
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

    if (
      refs.email.value !== '' &&
      refs.message.value !== '' &&
      refs.email.value.includes('@')
    ) {
      refs.email.value = '';
      refs.message.value = '';
    }

    if (localStorage.getItem('feedback-form-state') === null) {
      return;
    }

    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.clear();
  }
}
