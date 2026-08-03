/*==============================
    AOS
==============================*/

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});


/*==============================
    TYPING EFFECT
==============================*/

var typed = new Typed("#typing",{

    strings:[

        "Frontend Developer",

        "AI Enthusiast",

        "Computer Science Student",

        "Web Developer"

    ],

    typeSpeed:70,

    backSpeed:50,

    backDelay:1500,

    loop:true

});


/*==============================
    MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/*==============================
    TOP BUTTON
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==============================
    ACTIVE NAV LINK
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/*==============================
    NAVBAR BACKGROUND
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});


/*==============================
    ANIMATED COUNTERS
==============================*/

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (window.scrollY >= stats.offsetTop - 500 && !started) {

        counters.forEach(counter => {

            const target = parseFloat(counter.innerText);

            let count = 0;

            const increment = target / 80;

            const update = () => {

                if (count < target) {

                    count += increment;

                    if (target % 1 !== 0) {

                        counter.innerText = count.toFixed(1);

                    }

                    else {

                        counter.innerText = Math.ceil(count);

                    }

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText = target;

                }

            };

            update();

        });

        started = true;

    }

});

/*==============================
    SCROLL PROGRESS BAR
==============================*/

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressHeight =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

progress.style.position = "fixed";

progress.style.top = "0";

progress.style.left = "0";

progress.style.height = "4px";

progress.style.width = "0";

progress.style.zIndex = "9999";

progress.style.background =

"linear-gradient(90deg,#A855F7,#38BDF8,#EC4899)";


/*==============================
    BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        const x = e.clientX - this.offsetLeft;

        const y = e.clientY - this.offsetTop;

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
/*==============================
    PROJECT CARD TILT EFFECT
==============================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 16;

        const rotateX = ((rect.height / 2 - y) / rect.height) * 16;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/*==============================
    FLOATING CARDS
==============================*/

const floatingCards = document.querySelectorAll(

".skill-card,.achievement-card"

);

floatingCards.forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-10px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3000+(index*200),

            iterations:Infinity,

            easing:"ease-in-out"

        }

    );

});


/*==============================
    PARALLAX HERO IMAGE
==============================*/

window.addEventListener("mousemove",(e)=>{

    const heroImage=document.querySelector(".hero-image");

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/40;

    const y=(window.innerHeight/2-e.clientY)/40;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});


/*==============================
    EMAIL FORM
==============================*/



/*==============================
    CONSOLE MESSAGE
==============================*/

console.log(

"%cDesigned & Developed by Jaya Beulah J",

"font-size:20px;color:#A855F7;font-weight:bold;"

);

console.log(

"%cThanks for visiting my portfolio ❤️",

"font-size:14px;color:#38BDF8"

);


/*==============================
    YEAR AUTO UPDATE
==============================*/

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}


/*==============================
    SMOOTH FADE-IN
==============================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="opacity .8s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});


/*==============================
    FINISHED
==============================*/

console.log("Portfolio Loaded Successfully 🚀");

/*==============================
      PARALLAX
==============================*/

const photoCard = document.querySelector(".photo-card");
if (photoCard) {
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;
        photoCard.style.transform = `translate(${x}px,${y}px)`;
    });
}


/*=================================
        LOADER
=================================*/

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1800);
    }
});

/*=================================
        DARK / LIGHT MODE
=================================*/

const themeBtn=document.querySelector(".theme-toggle");

const themeIcon=themeBtn.querySelector("i");

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light");

    themeIcon.classList.replace(

        "fa-moon",

        "fa-sun"

    );

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeIcon.classList.replace(

            "fa-moon",

            "fa-sun"

        );

        localStorage.setItem("theme","light");

    }

    else{

        themeIcon.classList.replace(

            "fa-sun",

            "fa-moon"

        );

        localStorage.setItem("theme","dark");

    }

});

/*=================================
      INTERACTIVE SKILL FILTERS
=================================*/
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".skill-filter-btn");
    const skillCards = document.querySelectorAll(".skill-card-3d");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            skillCards.forEach((card) => {
                const category = card.dataset.category;
                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    /*=================================
          CLEAN RESUME DOCUMENT READER
    =================================*/
    const cleanTabs = document.querySelectorAll(".clean-tab-btn");
    const cleanPage1 = document.getElementById("cleanPage1");
    const cleanPage2 = document.getElementById("cleanPage2");
    const cleanViewport = document.getElementById("cleanResumeViewport");

    function setCleanResumeView(mode) {
        if (!cleanPage1 || !cleanPage2 || !cleanViewport) return;

        cleanViewport.classList.remove("dual-mode");

        if (mode === "page1") {
            cleanPage1.style.display = "flex";
            cleanPage2.style.display = "none";
        } else if (mode === "page2") {
            cleanPage1.style.display = "none";
            cleanPage2.style.display = "flex";
        } else if (mode === "dual") {
            cleanPage1.style.display = "flex";
            cleanPage2.style.display = "flex";
            cleanViewport.classList.add("dual-mode");
        }

        cleanTabs.forEach((t) => t.classList.toggle("active", t.dataset.view === mode));
    }

    cleanTabs.forEach((tab) => {
        tab.addEventListener("click", () => setCleanResumeView(tab.dataset.view));
    });
});