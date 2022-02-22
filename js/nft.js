document.addEventListener('DOMContentLoaded', () => {

  burgerActive();
  burgerInactivateHandler();
  iconClickInfoChange();

  function burgerActive() {

    let burger = document.getElementById('burger'),
        nav = document.getElementById('nav'),
        body = document.getElementsByTagName('body'),
        hide_background = document.getElementById('hide_background'),
        header_content = document.getElementById('header_content'),
        links = document.querySelectorAll('.nav_links');

    burger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      nav.classList.toggle('active');
      hide_background.classList.toggle('active');
      header_content.classList.toggle('hide');
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
        header_content.classList.remove('hide');
        body[0].classList.remove('block');
      })
    };

  };

  function burgerInactivateHandler() {

    let nav = document.getElementById('nav'),
        links = document.querySelectorAll('.nav_links'),
        hide_background = document.getElementById('hide_background'),
        body = document.getElementsByTagName('body'),
        header_content = document.getElementById('header_content'),
        burger = document.getElementById('burger');

    hide_background.addEventListener('click', (event) => {
      event.currentTarget.classList.remove('active');
      nav.classList.remove('active');
      burger.classList.remove('active');
      header_content.classList.remove('hide');
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




  /* IMAGES_TOGGLE */

  function iconClickInfoChange() {

     let icon = document.getElementsByClassName('factions_icons_block'),
         info = document.getElementsByClassName('factions_info'),
         image = document.getElementsByClassName('factions_image');

    for (let i = 0; icon.length > i; ++i) {
      icon[i].addEventListener('click', (event) => {
        for (let i = 0; icon.length > i; ++i) {
          icon[i].classList.remove('active');
        }
        for (let i = 0; info.length > i; ++i) {
          info[i].classList.remove('active');
        }
        info[i].classList.add('active');
        for (let i = 0; image.length > i; ++i) {
          image[i].classList.remove('active');
        }
        image[i].classList.add('active');
        event.currentTarget.classList.add('active');
      })
    };
  };
















})
