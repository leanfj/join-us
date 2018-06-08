let inputForm = document.querySelectorAll('.form__item input');
let labelForm = document.querySelectorAll('.form__item label');

inputForm.forEach((item, index, inputForm) => {
  item.addEventListener('click', function() {
    labelForm[index].classList.add('input__active');
  });
});
