"use strict"
window.addEventListener('load', () =>{
    let preloader = document.getElementById('pl'),
        bg = document.querySelector('.bg'),
        colors = document.querySelectorAll('.js-color'),
        body = document.querySelector('body')
    preloader.classList.add('load-finish')
    body.classList.remove('transition-none')
    setTimeout(() =>{
        bg.classList.remove('bg-start')
    }, 500)
    setTimeout(() =>{
        for (var i = 0; i < colors.length; ++i) {
            let color = colors[i]
            color.classList.remove(...[...color.classList].filter(n => n.indexOf('start') !== -1))
        }
    }, 2000)
    let about = document.getElementById('about')
    if (about !== 'undefined' && about !== null){
        let plane = document.getElementById('read-mode'),
            aboutOffset = about.getBoundingClientRect().top + document.body.scrollTop
        function bgTransform(){
            aboutOffset = about.getBoundingClientRect().top + document.body.scrollTop
            if (window.innerHeight - window.innerHeight / 3 > aboutOffset){
                plane.classList.add('read-mode-on')
            }
            else{
                plane.classList.remove('read-mode-on')
            }
        }
        bgTransform()
        window.addEventListener('scroll', bgTransform)
        window.addEventListener('resize', bgTransform)
    }
    let send = document.querySelector('input[type="submit"]'),
        sendWrapper = document.querySelector('.submit-wrapper')
    if (send !== 'undefined' && send !== null){
        sendWrapper.addEventListener('click', ()=>{
            send.click()
        })
    }
    let thisPage = window.location.href,
        page = document.querySelector('.page'),
        links = document.querySelectorAll('a')
        for (let i = 0; i < links.length; i++){
            if(thisPage == links[i].href){
                links[i].classList.add('this-page')
            }
        }
        if( thisPage.indexOf('Point') < 0){
            page.classList.add('dns')
        }
    window.addEventListener('scroll', () =>{
    const move = document.querySelectorAll('.js-move')
        for (let i = 0; i < move.length; i++){
            let pos = window.pageYOffset * move[i].dataset.rate
            move[i].style.transform = 'translateY('+pos+'px)'
        }
    })
    let menuToggle = document.getElementById('menu-toggle'),
        menu = document.getElementById('header-nav')
    menuToggle.addEventListener('click', () =>{
        menu.classList.toggle('nav-hide')
    })
    document.addEventListener("click", function(event) {
        if (event.target.closest("#header-nav, #menu-toggle")) return
        menu.classList.add("nav-hide")
    })
    let sizeS = document.querySelector('.s'),
        sizeM = document.querySelector('.m'),
        sizeL = document.querySelector('.l'),
        pics = document.querySelectorAll(".picture")
    if (sizeS !== 'undefined' && sizeS !== null) {
        sizeS.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd')
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-l', 'picture-m')
                }, 500)
            }
        })
        sizeM.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd')
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-l')
                   pic.classList.add('picture-m')
                }, 500)
            }
        })
        sizeL.addEventListener('click', () =>{
            for (var i = 0; i < pics.length; ++i) {
                pics[i].classList.add('picture-sd')
                let pic = pics[i]
                setTimeout(function(){
                   pic.classList.remove('picture-sd', 'picture-m')
                   pic.classList.add('picture-l')
                }, 500)
            }
        })
    }
})
