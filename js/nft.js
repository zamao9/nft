document.addEventListener('DOMContentLoaded', () => {

  burgerActive();

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




  burgerInactivateHandler();

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

  iconClickInfoChange();

  function iconClickInfoChange() {

     let icon = document.getElementsByClassName('factions_icons_block'),
         block = document.getElementsByClassName('nft_block'),
         nft = document.querySelectorAll('.nft');

    for (let i = 0; icon.length > i; ++i) {
      icon[i].addEventListener('click', (event) => {

        for (let i = 0; nft.length > i; ++i) {
          nft[i].classList.remove('active')
        }
        for (let i = 0; icon.length > i; ++i) {
          icon[i].classList.remove('active');
        }
        for (let i = 0; block.length > i; ++i) {
          block[i].classList.remove('active');
        }
        block[i].classList.add('active');
        event.currentTarget.classList.toggle('active');
      })
    };

    for (let i = 0; nft.length > i; ++i) {
      nft[i].addEventListener('click', (event) => {

        let currentNft = event.currentTarget;

        if (currentNft.classList.contains('active')) {
          currentNft.classList.remove('active');
        } else {
          for (let i = 0; nft.length > i; ++i) {
            nft[i].classList.remove('active');
          }
          nft[i].classList.toggle('active');
        }
      })
    };
  };




  /* ROADMAP_TOGGLE */

  titleActiveBodyActive();

  function titleActiveBodyActive() {

     let head = document.getElementsByClassName('roadmap_head_title'),
         body = document.getElementsByClassName('roadmap_items');

    for (let i = 0; head.length > i; ++i) {
      head[i].addEventListener('click', (event) => {
        for (let i = 0; head.length > i; ++i) {
          head[i].classList.remove('active');
        }
        for (let i = 0; body.length > i; ++i) {
          body[i].classList.remove('active');
        }
        body[i].classList.add('active');
        event.currentTarget.classList.add('active');
      })
    };
  };




  /* FAQ_COLLAPSE */


  collapseFaq();

  function collapseFaq() {


    let head = document.getElementsByClassName('faq_head_title'),
        body = document.getElementsByClassName('faq_body_text');


    for (let i = 0; head.length > i; ++i) {
      head[i].addEventListener('click', (event) => {
        let currentTarget = event.currentTarget,
            activatedTextBlock = document.querySelector('.text.faq_body_text.active');


        if (currentTarget.classList.contains('active')) {
          activatedTextBlock.style.maxHeight = null;
          activatedTextBlock.style.padding = null;
          activatedTextBlock.style.margin = null;
          currentTarget.classList.remove('active');
          activatedTextBlock.classList.remove('active');
        } else {
          if (activatedTextBlock) {
            activatedTextBlock.style.maxHeight = null;
          }

          for (let i = 0; head.length > i; ++i) {
            head[i].classList.remove('active');
            body[i].classList.remove('active');
            body[i].style.maxHeight = null;
            body[i].style.padding = null;
            body[i].style.margin = null;
          }
          event.currentTarget.classList.toggle('active');
          body[i].classList.toggle('active');

          let activeTextBlock = document.querySelector('.text.faq_body_text.active');
          activeTextBlock.style.padding = '5px 20px 10px';
          activeTextBlock.style.margin = '0 0 5px';
          activeTextBlock.style.maxHeight = activeTextBlock.scrollHeight + 50 + "px";
        }
      })
    }
  }




});




/* DATA_SCROLL */

$(function() {

  $("[data-scroll]").click(function(event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
        nav_links = $('.nav_links'),
        blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight - 5;

    $("html, body").animate ({
      scrollTop: blockOffset
    }, 900);
  });

})





