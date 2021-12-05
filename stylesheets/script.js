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

header = `
<div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
    </label>
</div>
<header>
    <img src="assets/avatar.png" min-width="50%" max-width="100%" height="auto" style="border-radius: 50%;">
    <br>
    <a href="index.html">Home</a>
    <br>
    <a href="about.html">About</a>
    <br>
    <a href="blogs.html">Blogs</a>
    <br>
    <a href="contact.html">Contact</a>
    <br>
</header>`;


window.onload = function (){
    var head = document.querySelector("header")
    head.innerHTML = header
    var toggleSwitch = document.querySelector(".theme-switch input")
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }
}
