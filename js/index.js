
// const searchToggle = document.getElementById("searchToggle");
// const searchForm = document.getElementById("searchForm");
// const menu = document.getElementById("menuBar");
// const icons = document.querySelector(".icons");

// const formbtn = document.getElementById("login-btn");
// const loginForm = document.querySelector(".login-form");
// const registerForm = document.querySelector(".register-form");
// const overlay = document.getElementById("overlay");
// const formclose = document.getElementById("form-close");
// const regClose = document.getElementById("reg-close");


// searchToggle.addEventListener("click", () => {
//     searchForm.classList.toggle("active");
// });

// menu.addEventListener("click", () => {
//     icons.classList.toggle("show");
// });




// formbtn.addEventListener("click", () => {
//     loginForm.style.display = "block";
//     registerForm.style.display = "none";
//     overlay.style.display = "block";
// });


// formclose.addEventListener("click", () => {
//     loginForm.style.display = "none";
//     overlay.style.display = "none";
// });

// if (regClose) {
//     regClose.addEventListener("click", () => {
//         registerForm.style.display = "none";
//         overlay.style.display = "none";
//     });
// }

// overlay.addEventListener("click", () => {
//     loginForm.style.display = "none";
//     registerForm.style.display = "none";
//     overlay.style.display = "none";
// });

// document.querySelector('#show-reg').onclick = (e) => {
//     e.preventDefault();
//     document.querySelector('.login-form').style.display = 'none';
//     document.querySelector('.register-form').style.display = 'block';
// };


// document.querySelector('#show-login').onclick = (e) => {
//     e.preventDefault();
//     document.querySelector('.register-form').style.display = 'none';
//     document.querySelector('.login-form').style.display = 'block';
// };

// let videoBtn = document.querySelectorAll(".vidBtn");
// let videoSlider = document.querySelector("#video-slider");
// let currentIndex = 0;

// if (document.querySelector(".vidBtn.active")) {
//     let firstSrc = document.querySelector(".vidBtn.active").getAttribute("data-src");
//     videoSlider.src = firstSrc;
// }

// videoBtn.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         changeVideo(index);
//     });
// });

// function changeVideo(index) {
//     document.querySelector(".controls .active").classList.remove("active");
//     videoBtn[index].classList.add("active");
//     let src = videoBtn[index].getAttribute("data-src");
//     videoSlider.src = src;
//     currentIndex = index;
// }

// setInterval(() => {
//     let nextIndex = (currentIndex + 1) % videoBtn.length;
//     changeVideo(nextIndex);
// }, 3000);

// const sliders = document.querySelectorAll(".box .slider");

// sliders.forEach(slider => {
//     const images = slider.querySelectorAll("img");
//     let current = 0;
//     let interval;

//     function startSlider() {
//         interval = setInterval(() => {
//             images[current].classList.remove("active");
//             current = (current + 1) % images.length;
//             images[current].classList.add("active");
//         }, 1000);
//     }

//     function stopSlider() {
//         clearInterval(interval);
//     }

//     if (images.length > 0) {
//         images[current].classList.add("active");
//     }

//     slider.parentElement.addEventListener("mouseover", startSlider);
//     slider.parentElement.addEventListener("mouseout", stopSlider);
// });

// সিলেক্টরগুলো ডিক্লেয়ার করা
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

// সার্চ বার টগল
if (searchToggle) {
    searchToggle.onclick = () => {
        searchForm.classList.toggle("active");
    };
}

// মেনু বার টগল (মোবাইল ভিউ)
if (menu) {
    menu.onclick = () => {
        icons.classList.toggle("show");
    };
}

// লগইন ফর্ম ওপেন করা
if (formbtn) {
    formbtn.onclick = () => {
        loginForm.style.display = "block";
        if (registerForm) registerForm.style.display = "none";
        if (overlay) overlay.style.display = "block";
    };
}

// লগইন ফর্ম ক্লোজ করা
if (formclose) {
    formclose.onclick = () => {
        loginForm.style.display = "none";
        if (overlay) overlay.style.display = "none";
    };
}

// রেজিস্ট্রেশন ফর্ম ক্লোজ করা
if (regClose) {
    regClose.onclick = () => {
        registerForm.style.display = "none";
        if (overlay) overlay.style.display = "none";
    };
}

// ওভারলে ক্লিক করলে সব ক্লোজ হবে
if (overlay) {
    overlay.onclick = () => {
        loginForm.style.display = "none";
        if (registerForm) registerForm.style.display = "none";
        overlay.style.display = "none";
    };
}

// লগইন থেকে রেজিস্ট্রেশন ফর্মে যাওয়া
// const showReg = document.querySelector('#show-reg');
// if (showReg) {
//     showReg.onclick = (e) => {
//         e.preventDefault();
//         loginForm.style.display = 'none';
//         registerForm.style.display = 'block';
//     };
// }
// এই অংশটি নিশ্চিত করুন যেন PHP সাবমিটকে বাধা না দেয়
const showReg = document.querySelector('#show-reg');
if (showReg) {
    showReg.onclick = (e) => {
        // যদি অন্য পেজে যেতে চান, তবে e.preventDefault() সরিয়ে দিন
        // e.preventDefault(); 
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    };
}

// রেজিস্ট্রেশন থেকে লগইন ফর্মে আসা
const showLogin = document.querySelector('#show-login');
if (showLogin) {
    showLogin.onclick = (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    };
}

// --- ভিডিও স্লাইডার লজিক ---
let videoBtn = document.querySelectorAll(".vidBtn");
let videoSlider = document.querySelector("#video-slider");
let currentIndex = 0;

if (videoSlider && videoBtn.length > 0) {
    // শুরুতে একটি ভিডিও লোড করা
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

    // অটো ভিডিও চেঞ্জ
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % videoBtn.length;
        changeVideo(nextIndex);
    }, 3000);
}

// --- ইমেজ স্লাইডার (Hover Slider) লজিক ---
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