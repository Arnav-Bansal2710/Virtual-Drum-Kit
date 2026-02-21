var n = document.querySelectorAll(".drum").length;


var m = addEventListener("keydown",function(event){
    var m = event.key;
    soundTune(m);
    ani(m);
});

for(var i=0;i<n;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var key = this.innerHTML;
        soundTune(key);
        ani(key);
    });
}

function soundTune(key){
    switch(key){
        case 'w':
            var a1 = new Audio("./sounds/crash.mp3");
            a1.play();
            break;
        case 'a':
            var a1 = new Audio("./sounds/kick-bass.mp3");
            a1.play();
            break;
        case 's':
            var a1 = new Audio("./sounds/snare.mp3");
            a1.play();
            break;
        case 'd':
            var a1 = new Audio("./sounds/tom-1.mp3");
            a1.play();
            break;
        case 'j':
            var a1 = new Audio("./sounds/tom-2.mp3");
            a1.play();
            break;
        case 'k':
            var a1 = new Audio("./sounds/tom-3.mp3");
            a1.play();
            break;
        case 'l':
            var a1 = new Audio("./sounds/tom-4.mp3");
            a1.play();
            break;
    }
}

function ani(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}