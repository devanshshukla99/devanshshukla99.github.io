function sidebar(){
    console.log(document.querySelector("#sidebarbtn").className)
    if(document.querySelector("#sidebarbtn").className === "sidebarbtn active") {
        document.querySelector("#sidebarbtn").className = "sidebarbtn";
        document.querySelector(".sidebar").style.display = "none";
        document.querySelector("#sidebarbtn").style.display = "";
    }
    else {
        document.querySelector("#sidebarbtn").className += " active";
        document.querySelector(".sidebar").style.display = "flex";
        document.querySelector("#sidebarbtn").style.display = "none";
    }
}