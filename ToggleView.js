var i = 1;

$('input').on('click', function () {
  
    if (i % 2 == 0) {
        whiteBackground();
        i++;
    }
    else {
        blackBackground();
        i++;
    }
});



function blackBackground() {
    $('main').css({
        backgroundColor: "black",
        color: "white"
    });
}

function whiteBackground() {
    $('main').css({
        backgroundColor: "white",
        color: "black"
    });
}