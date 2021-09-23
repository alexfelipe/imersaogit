/**
 * Animar o fundo
 */

let i = 0

function loop(){
    $('body').animate({
        opacity: 1
    }, 10, ()=>{
        i = (i < 360) ? i + 1 : 0;
        
        // rotacionar o bg image
        $('body').css('background-image', `linear-gradient(${i}deg, red, blue)`);
        $('body').css('-moz-background-image', `linear-gradient(${i}deg, red, blue)`);
        $('body').css('-webkit-background-image', `linear-gradient(${i}deg, red, blue)`);

        // reiniciar loop
        loop()
    })
}

loop()
