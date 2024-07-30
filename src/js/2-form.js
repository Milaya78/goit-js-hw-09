const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  formData = savedData;
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);

  formData = {
    email: '',
    message: '',
  };

  feedbackForm.reset();
});
