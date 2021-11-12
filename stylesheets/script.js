function sidebar(){
    if(document.querySelector("#sidebarbtn").className === "sidebarbtn active") {
        document.querySelector("#sidebarbtn").className = "sidebarbtn";
        document.querySelector("#sbar").style.transform = "translateX(-100%)"
        document.querySelector("#sidebarbtn").style.transform = "translateX(200%)"
    }
    else {
        document.querySelector("#sidebarbtn").className += " active";
        document.querySelector("#sidebarbtn").style.transform = "translateX(0%)"
        document.querySelector("#sbar").style.transform = "translateX(0%)"
    }
}