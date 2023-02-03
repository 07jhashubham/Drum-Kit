function setAnimanation(input) {
    document.querySelector("." + input).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + input).classList.remove("pressed");
    }, 100)
}




document.addEventListener("keydown", lal);

function lal(event) {
    makeSound(event.key);
    setAnimanation(event.key);
}



for (let i = 0; document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
    let buttonClicked = this.innerHTML;

    makeSound(buttonClicked);
    setAnimanation(buttonClicked);
}
function makeSound (char) {
      switch (char) {
        case "w":
            let cash = new Audio("/sounds/crash.mp3");
            cash.play();
            break;
        case "a":
            let kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonClicked);
    }
}


