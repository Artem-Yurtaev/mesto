let popupElement = document.querySelector('.popup');
let popupCloseButton = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');


function togglePopapVisibility () {
  popupElement.classList.toggle('popup_opened');
}

popupOpenButtonElement.addEventListener('click', togglePopapVisibility);
popupCloseButton.addEventListener('click', togglePopapVisibility);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__description');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function resetPopup () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popupCloseButton.addEventListener('click', resetPopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopapVisibility();
}

formElement.addEventListener('submit', formSubmitHandler);
