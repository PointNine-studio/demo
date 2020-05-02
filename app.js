window.addEventListener('load', ()=>{
    //Preloader
    let preloader = document.getElementById('pl'),
        colors = document.querySelectorAll('.js-color'),
        body = document.querySelector('body')

    preloader.classList.add('load-finish')
    body.classList.remove('transition-none')

    setTimeout(() =>{
        //remove any "start" class
        for (var i = 0; i < colors.length; ++i) {
            let color = colors[i]
            color.classList.remove(...[...color.classList].filter(n => n.indexOf('start') !== -1))
        }
    }, 100)

})
