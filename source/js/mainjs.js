(function(){
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const close = document.querySelector('.nav_close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav_active');
  });
  close.addEventListener('click',() => {
    menu.classList.remove('nav_active');
  });
}());
