import Lodash from 'lodash.throttle';
const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');
const feedback = localStorage.getItem('feedback-form-state');
const emailInput = feedbackForm.firstElementChild.firstElementChild;
const messageInput =
  feedbackForm.firstElementChild.nextElementSibling.firstElementChild;
feedbackForm.addEventListener('input', throttle(foundEvenet, 500));
submitBtn.addEventListener('click', getSubmitEvent);

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
    emailInput.value = GetParsefeedbackValue.email || '';
    messageInput.value = GetParsefeedbackValue.message || '';
  } catch (error) {}
}

window.onload = function () {
  const loaded = sessionStorage.getItem('loaded');
  if (loaded) {
    reloadedPage();
  }else {
        sessionStorage.setItem('loaded', true);
      }
    
};

function getSubmitEvent(event) {
  if (event.target.type === 'submit') {
    event.preventDefault();

    if (
      emailInput.value !== '' &&
      messageInput.value !== '' &&
      emailInput.value.includes('@')
    ) {
      emailInput.value = '';
      messageInput.value = '';
    }

    if (localStorage.getItem('feedback-form-state') === null) {
      return;
    }

    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.clear();
  }
}
