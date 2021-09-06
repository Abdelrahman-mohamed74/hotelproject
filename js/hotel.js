/****************** loader ******************/
$('.loader').fadeOut(3000, function () {
        $(".parent-loader").fadeOut(2500);
});

/****************** bar ******************/

$('#bar').click(function () {
        $('header ul').slideToggle();
});

/****************** inputs ******************/

$('.input-contact').focus(function () {
        $(this).attr('placeholder', '');
        $(this).css({
                borderBottom: '1px solid #C5A880'
        })
});

$('.input-contact').blur(function () {
        $place = $(this).attr('data-placeholder');
        $(this).attr('placeholder', $place);
        $(this).css({
                borderBottom: '1px solid #BBBBBB'
        })
});

/****************** textarea ******************/

$('textarea').focus(function () {
        $(this).attr('placeholder', '');
        $(this).css({
                borderBottom: '1px solid #C5A880'
        })
});

$('textarea').blur(function () {
        $place = $(this).attr('data-placeholder');
        $(this).attr('placeholder', $place);
        $(this).css({
                borderBottom: '1px solid #BBBBBB'
        })
});

let textArea = document.getElementById('textarea');
let numTextArea = document.getElementById('numtextarea');

textArea.onkeyup = function () {
        numTextArea.textContent = 50 - this.value.length;
        if (numTextArea.textContent < 0) {
                numTextArea.style.display = 'block';
                numTextArea.style.color = 'red';
                textArea.style.borderBottom = '1px solid red';
        } else {
                numTextArea.style.color = 'black';
                textArea.style.borderBottom = '1px solid #C5A880';
                numTextArea.style.display = 'none';
        }
}