let button1 = document.getElementById('btn1');
let txtarea = document.getElementById('textarea');
let intro = document.getElementById('intro');


button1.addEventListener('click', function(){
    txtarea.innerText = "haha am getting shy again...but dont roll your eyes...am doing this";
    intro.style.display = 'none';

});

var soundtrack = document.getElementById("soundtrack");

function playSoundtrack() {
    soundtrack.play();
    soundtrack.volume = 0.3;
}

