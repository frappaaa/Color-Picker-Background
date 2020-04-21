    $(document).ready( function(){
        
        var colorWell;
        var bg
        var new_bg
        var color
        var new_c
        var body = $('#body')
        if(localStorage.getItem('bgc')){
            body.css('background', localStorage.getItem('bgc'))
        }else{
            localStorage.setItem('bgc', '#ffffff')
            body.css('background', localStorage.getItem('bgc'))
        }
    
        colorWell = document.querySelector("#colorWell");
        colorWell.addEventListener("input", function(){
            new_bg = colorWell.value
            bg = body.css('background', new_bg)
            localStorage.setItem('bgc', new_bg)
            color = chroma(colorWell.value)
            if(color.luminance() < 0.3){
                new_c = 'white'
                body.css('color','white')
                body.css('transition', 'color .5s')
            }else{
                new_c = 'black'
                body.css('color','black')
                body.css('transition', 'color .5s')
            }
            localStorage.setItem('color', new_c)
        }, false);

        colorWell.select(); // rende possibile la selezione del colore anche nei browser in cui non è supportata il "color picker", dove invece c'è un campo da compilare


        
        
    })

