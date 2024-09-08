'use strict';

// const modal = document.querySelector(`.modal`);
// const overlay = document.querySelector(`.overlay`);
// const btnclosemodal = document.querySelector(`.close-modal`);
// const btnopenmodal = document.querySelectorAll(`.show-modal`);
// const closeModal = function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// };
// const openModal = function () {
//   modal.classList.remove(`hidden`);
//   overlay.classList.remove(`hidden`);
// };
// for (let i = 0; i < btnopenmodal.length; i++)
//   btnopenmodal[i].addEventListener(`click`, openModal);
// btnclosemodal.addEventListener(`click`, closeModal);
// overlay.addEventListener(`click`, closeModal);

// document.addEventListener(`keydown`, function (e) {
//   console.log(e.key);
//   if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
//     closeModal();
// modal.classList.add(`hidden`);
// overlay.classList.add(`hidden`);
//   }
// });
// console.log();
// const showModal = document.querySelectorAll(`.show-modal`);
// const hiddenModal = document.querySelector(`.modal`);
// const closeModal = document.querySelector(`.close-modal`);
// const overlay = document.querySelector(`.overlay`);

// const removeModal = function () {
//   hiddenModal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// };

// const openModal = function () {
//   hiddenModal.classList.remove(`hidden`);
//   overlay.classList.remove(`hidden`);
// };

// for (let i = 0; i <= showModal.length; i++) {
//   showModal[i].addEventListener(`click`, openModal);

//   closeModal.addEventListener(`click`, removeModal);
//   overlay.addEventListener(`click`, removeModal);
// }
// document.addEventListener(`keydown`, function (e) {
//   if (e.key === `Escape` && !hiddenModal.classList.contains(`hidden`)) {
//     removeModal();
//   }
// });

//////////

const Modal = document.querySelectorAll(`.show-modal`);
const PopModal = document.querySelector(`.modal`);
const CloseModal = document.querySelector(`.close-modal`);
const OverLay = document.querySelector(`.overlay`);
const RemoveModal = () => {
  PopModal.classList.remove(`hidden`);
  OverLay.classList.remove(`hidden`);
};
for (let i = 0; i < Modal.length; i++) {
  Modal[i].addEventListener(`click`, RemoveModal);
}

const WorkingCloseModal = () => {
  PopModal.classList.add(`hidden`);
  OverLay.classList.add(`hidden`);
};
CloseModal.addEventListener(`click`, WorkingCloseModal);
OverLay.addEventListener(`click`, WorkingCloseModal);
