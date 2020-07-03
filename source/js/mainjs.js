(function () {
  const header = document.querySelector('.header');
  const active = document.querySelector('.header_container');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header_active');
      active.classList.add('header_container_active');
    } else {
      header.classList.remove('header_active');
      active.classList.remove('header_container_active');
    }
  };
}());

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
