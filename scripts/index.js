let popupElement = document.querySelector('.popup');
let popupCloseButton = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_description');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');


function openPopap () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopap () {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopap();
}

popupOpenButtonElement.addEventListener('click', openPopap);
popupCloseButton.addEventListener('click', closePopap);
formElement.addEventListener('submit', formSubmitHandler);
