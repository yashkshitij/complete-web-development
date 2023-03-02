'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
const openModal = function () {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnClosemodal.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closemodal();
  }
});
