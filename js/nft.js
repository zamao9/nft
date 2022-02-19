document.addEventListener('DOMContentLoaded', () => {

  burgerActive();
  burgerInactivateHandler();

  function burgerActive() {

    let burger = document.getElementById('burger'),
        nav = document.getElementById('nav'),
        body = document.getElementsByTagName('body'),
        hide_background = document.getElementById('hide_background'),
        header = document.getElementById('header'),
        links = document.querySelectorAll('.nav_links');

    burger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      nav.classList.toggle('active');
      hide_background.classList.toggle('active');
      header.classList.toggle('hide');
      body[0].classList.toggle('block');
    });


    for (let i = 0; links.length > i; ++i) {
      links[i].addEventListener('click', (event) => {
        for (let i = 0; links.length > i; ++i) {
          links[i].classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        nav.classList.remove('active');
        burger.classList.remove('active');
        hide_background.classList.remove('active');
        header.classList.remove('hide');
        body[0].classList.remove('block');
      })


    };

  };

  function burgerInactivateHandler() {

    let nav = document.getElementById('nav'),
        links = document.querySelectorAll('.nav_links'),
        hide_background = document.getElementById('hide_background'),
        body = document.getElementsByTagName('body'),
        header = document.getElementById('header'),
        burger = document.getElementById('burger');

    hide_background.addEventListener('click', (event) => {
      event.currentTarget.classList.remove('active');
      nav.classList.remove('active');
      burger.classList.remove('active');
      header.classList.remove('hide');
      body[0].classList.remove('block');
    })


  };




  /* АНИМАЦИЯ ПРИ СКРОЛЛЕ */

  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 10,
    delay: 0,
    duration: 1500,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-top',
  })








})
