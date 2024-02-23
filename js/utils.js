class Beat{
    constructor(audioSrc){
        this.audio= new Audio(audioSrc);
        // console.log(this.audio);
       // this.audio.play();
    }
    play = () =>{
        this.audio.currentTime =  0;
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.element = document.getElementById(keyCode);
        this.color = color;
        this.keyCode = keyCode;
        // console.log(this.element);
        this.setButtonColorInHTML();
        this.createTransitionEndListener();
    }

   

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor= this.color;
    }
     /**
     * createTransitionEndListner is created to remove the background color and transition effect once the tranaition time ended
     */
    createTransitionEndListener = () => {
        // console.log("m");
        this.element.addEventListener("transitionend", ()=>{
            this.deselect();
            // console.log("in");
        })

    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor=this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = `none`;
    }
}