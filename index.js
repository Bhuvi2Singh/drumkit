

for(var i=0;i<document.querySelectorAll("button").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){
    

var letter=this.innerHTML;
makesound(letter);
animation(letter);






});
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(key) {
    switch(key) {

    case "w": 
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    break;

    case "a": 
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
    break;

    case "s": 
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
    break;

    case "d": 
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
    break;

    case "j": 
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
    break;

    case "k": 
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
    break;
    case "l": 
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
    break;

    default: console.log(letter);
}
}

function animation(currentkey){
     var t=document.querySelector("."+ currentkey);
     t.classList.add("pressed");

     setTimeout(function(){
t.classList.remove("pressed");
     },100);
    


}