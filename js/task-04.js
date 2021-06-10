
const counter = document.querySelector('#value');
let counterValue = 0;
const refs = {
    decrementEl : document.querySelector('[data-action="decrement"]'),
    incrementEl : document.querySelector('[data-action="increment"]'),
};
refs.incrementEl.addEventListener('click', onClickBtnIncrement);
function onClickBtnIncrement  ()  {
    counter.textContent = counterValue += 1;   
};
refs.decrementEl.addEventListener('click', onClickBtnDecrement);
function onClickBtnDecrement  ()  {
  counter.textContent = counterValue -= 1;   
};



