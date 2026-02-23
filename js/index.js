
const searchToggle = document.getElementById("searchToggle");
const searchForm = document.getElementById("searchForm");
const menu = document.getElementById("menuBar");
const icons = document.querySelector(".icons");

const formbtn = document.getElementById("login-btn");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const overlay = document.getElementById("overlay");
const formclose = document.getElementById("form-close");
const regClose = document.getElementById("reg-close");

if (searchToggle) {
    searchToggle.onclick = () => {
        searchForm.classList.toggle("active");
    };
}


if (menu) {
    menu.onclick = () => {
        icons.classList.toggle("show");
    };
}


if (formbtn) {
    formbtn.onclick = () => {
        loginForm.style.display = "block";
        if (registerForm) registerForm.style.display = "none";
        if (overlay) overlay.style.display = "block";
    };
}


if (formclose) {
    formclose.onclick = () => {
        loginForm.style.display = "none";
        if (overlay) overlay.style.display = "none";
    };
}


if (regClose) {
    regClose.onclick = () => {
        registerForm.style.display = "none";
        if (overlay) overlay.style.display = "none";
    };
}


if (overlay) {
    overlay.onclick = () => {
        loginForm.style.display = "none";
        if (registerForm) registerForm.style.display = "none";
        overlay.style.display = "none";
    };
}

const showReg = document.querySelector('#show-reg');
if (showReg) {
    showReg.onclick = (e) => {
  
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    };
}


const showLogin = document.querySelector('#show-login');
if (showLogin) {
    showLogin.onclick = (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    };
}


let videoBtn = document.querySelectorAll(".vidBtn");
let videoSlider = document.querySelector("#video-slider");
let currentIndex = 0;

if (videoSlider && videoBtn.length > 0) {
  
    const activeBtn = document.querySelector(".vidBtn.active") || videoBtn[0];
    videoSlider.src = activeBtn.getAttribute("data-src");

    videoBtn.forEach((btn, index) => {
        btn.onclick = () => {
            changeVideo(index);
        };
    });

    function changeVideo(index) {
        const currentActive = document.querySelector(".controls .active");
        if (currentActive) currentActive.classList.remove("active");
        
        videoBtn[index].classList.add("active");
        let src = videoBtn[index].getAttribute("data-src");
        videoSlider.src = src;
        currentIndex = index;
    }
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % videoBtn.length;
        changeVideo(nextIndex);
    }, 3000);
}


const sliders = document.querySelectorAll(".box .slider");

sliders.forEach(slider => {
    const images = slider.querySelectorAll("img");
    let current = 0;
    let interval;

    function startSlider() {
        if (images.length > 1) {
            interval = setInterval(() => {
                images[current].classList.remove("active");
                current = (current + 1) % images.length;
                images[current].classList.add("active");
            }, 1000);
        }
    }

    function stopSlider() {
        clearInterval(interval);
    }

    if (images.length > 0) {
        images[current].classList.add("active");
    }

    slider.parentElement.addEventListener("mouseover", startSlider);
    slider.parentElement.addEventListener("mouseout", stopSlider);
});