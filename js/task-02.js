const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const navEl = document.querySelector('#ingredients');
 
ingredients.forEach((ingredient) => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navEl.appendChild(navItemEl);
  return navItemEl;
});
console.log(navEl);

