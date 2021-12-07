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
    <div class="avatar" style="max-width: 60%;">
        <img src="assets/avatar.png" min-width="10%" style="border-radius: 50%;">
    </div>
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

footer = `
<div class="footer">
    <p><small>adapted from the <a href="https://github.com/orderedlist/minimal">minimal theme</a>
    </small></p>
</div>`;

dark_slider = `
<div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
    </label>
</div>`;

window.onload = function (){
    var head = document.querySelector("header")
    if (head) {
        head.innerHTML = header
    }
    var foot = document.querySelector("footer")
    if (foot) {
        foot.innerHTML = footer
    }
    var slider = document.querySelector("dark_slider")
    if (slider){
        slider.innerHTML = dark_slider
    }

    var toggleSwitch = document.querySelector(".theme-switch input")
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "light")
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem("theme", "dark")
        }    
    }
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }
}
