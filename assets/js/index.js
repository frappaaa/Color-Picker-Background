    $(document).ready(function () {

        var colorWell;
        var bg
        var new_bg
        var color
        var new_c
        var body = $('#body')
        if (localStorage.getItem('bgc')) {
            body.css('background', localStorage.getItem('bgc'))
        } else {
            localStorage.setItem('bgc', '#ffffff')
            body.css('background', localStorage.getItem('bgc'))
        }

        colorWell = document.querySelector("#colorWell");
        colorWell.addEventListener("input", function () {
            new_bg = colorWell.value
            bg = body.css('background', new_bg)
            localStorage.setItem('bgc', new_bg)
            color = chroma(colorWell.value)
            if (color.luminance() < 0.3) {
                new_c = 'white'
                body.css('color', 'white')
                body.css('transition', 'color .5s')
            } else {
                new_c = 'black'
                body.css('color', 'black')
                body.css('transition', 'color .5s')
            }
            localStorage.setItem('color', new_c)
        }, false);

        colorWell.select(); // rende possibile la selezione del colore anche nei browser in cui non è supportata il "color picker", dove invece c'è un campo da compilare


    })

    //Acquisisci info dal documento HTML
    const range = document.querySelector('#text-size')
    const p = document.querySelector('p')
    //imposta il font size nella memoria locale e la posizione del cursore nel range
    if (localStorage.getItem('fS')) {
        p.style.fontSize =  localStorage.getItem('fS')
        if(localStorage.getItem('fS').length >= 5){
            range.value = localStorage.getItem('fS').slice(0,3)
        }else{
            range.value = localStorage.getItem('fS').slice(0,2)
        }
        
    } else {
        localStorage.setItem('fS', '10px')
        p.style.fontSize =  localStorage.getItem('fS')
        range.value = localStorage.getItem('fS').slice(0,2)
    }
    //Attiva il cambio di grandezza del font ogni volta che sposto il cursore
    range.addEventListener('input', () => {
        p.style.fontSize = range.value + 'px'
        localStorage.setItem('fS', p.style.fontSize)
    })

    //acquisisci le info dal file HTML
    const select = document.querySelector('#font-select')
    //Crea una lista di font già collegati e importati nel foglio di stile
    let fonts = ['Lato', 'Poppins', 'Roboto', 'DotGothic16']
    //Stampa i vari font nella lista select
    fonts.map(font => {
        select.innerHTML += `<option value="${font}">${font}</option>`
    })
    //Attiva il cambio di font ogni volta che lo cambi dal menù a tendina
    select.addEventListener('input', () => {
        p.style.fontFamily = `'${select.value}', sans-serif` 
    })
    