//play button
const buttons = document.getElementsByTagName("button");
const booBtn = document.getElementById("booSound");
const applauseBtn = document.getElementById("applauseSound");
const gaspBtn = document.getElementById("gaspSound");
const tadaBtn = document.getElementById("tadaSound");
const victoryBtn = document.getElementById("victorySound");
const wrongBtn = document.getElementById("wrongSound");

//sound
const sound = document.getElementById("sound");


//image
const image = document.getElementById("image");


window.addEventListener('DOMContentLoaded',function() {
    image.style.display = "block";
    for(const iterator of buttons) {
        iterator.style.display = "block";
    }
});

booBtn.onclick = function() {
    sound.src = "sounds/boo.mp3";
    sound.play();
    image.src = "images/booing.gif";
    document.body.style.backgroundColor = "coral";
}

applauseBtn.onclick = function() {
    sound.src = "sounds/applause.mp3";
    sound.play();
    image.src = "images/applause.gif";
    document.body.style.backgroundColor = "cadetblue";
}

gaspBtn.onclick = function() {
    sound.src = "sounds/gasp.mp3";
    sound.play();
    image.src = "images/gasping.gif";
    document.body.style.backgroundColor = "darkslategray";
}

tadaBtn.onclick = function() {
    sound.src = "sounds/tada.mp3";
    sound.play();
    image.src = "images/tada.gif";
    document.body.style.backgroundColor = "gold";
}

victoryBtn.onclick = function() {
    sound.src = "sounds/victory.mp3";
    sound.play();
    image.src = "images/victory.gif";
    document.body.style.backgroundColor = "green";
}

wrongBtn.onclick = function() {
    sound.src = "sounds/wrong.mp3";
    sound.play();
    image.src = "images/wrong.gif";
    document.body.style.backgroundColor = "red";
}

// müzik bittiğinde eski haline döndür
sound.onended = function() {
    image.src = "./sound.png";
    document.body.style.backgroundColor =  "#a164df";
}
