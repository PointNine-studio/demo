"use strict";
window.addEventListener('load', () =>{
    let preloader = document.getElementById('pl'),
        title = document.getElementById('title'),
        body = document.querySelector('body'),
        bg = document.querySelector('.bg');
    preloader.classList.add('load-finish');
    body.classList.remove('transition-none');
    setTimeout(() =>{
        title.classList.remove('title-start');
        bg.classList.remove('bg-start');
    }, 500);
    window.addEventListener('scroll', () =>{
    const move = document.querySelectorAll('.js-move');
        for (let i = 0; i < move.length; i++){
            let pos = window.pageYOffset * move[i].dataset.rate;
            move[i].style.transform = 'translateY('+pos+'px)';
        };
    });
    let menuToggle = document.getElementById('pn-header-menu'),
        menu = document.querySelector('.pn-menu');
    menuToggle.addEventListener('click', () =>{
        menu.classList.toggle('menu-hide');
    });
    document.addEventListener("click", function(event) {
        if (event.target.closest("#pn-header-menu, .pn-menu")) return;
        menu.classList.add("menu-hide");
    });
    let mapBtn = document.getElementById('info-toggle'),
    closer = document.getElementById('closer'),
    page = document.querySelector('.page'),
    thisPage = window.location.href,
    toggle = document.querySelectorAll('#info-toggle, #closer'),
    more = document.getElementById('more');
    // if( thisPage.indexOf('The') < 0){
    //     page.classList.add('dns')
    // }
    for (var i = 0; i < toggle.length; ++i) {
        toggle[i].addEventListener('click', () =>{
            more.classList.add('m-hide');
            mapBtn.classList.toggle('disabled');
            setTimeout(() =>{
                closer.classList.toggle('closer-start');
                more.classList.toggle('more-top');
                setTimeout(() =>{
                        more.classList.remove('m-hide')
                }, 200);
            }, 200);
        });
    };
    let sizeS = document.querySelector('.s'),
        sizeM = document.querySelector('.m'),
        sizeL = document.querySelector('.l'),
        pics = document.querySelectorAll(".picture");
    if (sizeS !== 'undefined' && sizeS !== null) {
        sizeS.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd');
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-l', 'picture-m');
                }, 500)
            };
        });
        sizeM.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd');
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-l');
                   pic.classList.add('picture-m');
                }, 500)
            };
        });
        sizeL.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd');
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-m');
                   pic.classList.add('picture-l');
                }, 500)
            };
        });
    };
});



























