
var inputs = "input[maxlength], textarea[maxlength]";
$(document).on('keyup', "[maxlength]", function (e) {
    
    var este = $(this),
        maxlength = este.attr('maxlength'),
        maxlengthint = parseInt(maxlength),
        textoActual = este.val(),
        currentCharacters = este.val().length;
    remainingCharacters = maxlengthint - currentCharacters,
        espan = este.prev('label').find('span');

    if (document.addEventListener && !window.requestAnimationFrame) {
        if (remainingCharacters <= -1) {
            remainingCharacters = 0;
        }
    }
    espan.html(remainingCharacters);
    if (!!maxlength) {
        var texto = este.val();
        if (texto.length >= maxlength) {
            este.removeClass().addClass("bordeverde");
            este.val(text.substring(0, maxlength));
            e.preventDefault();
        }
        else if (texto.length < maxlength) {
            este.removeClass().addClass("bordeazul");
        }
    }
});