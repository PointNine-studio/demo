window.addEventListener('load', ()=>{
    //Preloader
    let preloader = document.getElementById('pl'),
        colors = document.querySelectorAll('.js-color')

    preloader.classList.add('load-finish')

    setTimeout(() =>{
        //remove any "start" class
        for (var i = 0; i < colors.length; ++i) {
            let color = colors[i]
            color.classList.remove(...[...color.classList].filter(n => n.indexOf('start') !== -1))
        }
    }, 100)

})
