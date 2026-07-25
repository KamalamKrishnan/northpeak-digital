/*=========================================
        NORTHPEAK DIGITAL
        Premium Landing Page
=========================================*/


/*=========================================
    SELECT ELEMENTS
=========================================*/

const progressBar = document.getElementById("progress-bar");

const topBtn = document.getElementById("topBtn");

const faqItems = document.querySelectorAll(".faq-item");

const stats = document.querySelectorAll(".stat h2");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

const navbar = document.querySelector(".navbar");

const form = document.querySelector("form");



/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});



/*=========================================
    BACK TO TOP BUTTON
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*=========================================
    NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



/*=========================================
    FAQ ACCORDION
=========================================*/

faqItems.forEach(item => {

    const button =
        item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



/*=========================================
    SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

    ".card, .stat, .price-card, .glass-card"

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

});

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.style.transition =
                ".7s ease";

            el.style.opacity = "1";

            el.style.transform =
                "translateY(0)";

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/*=========================================
    ANIMATED COUNTERS
=========================================*/

let counted = false;

function animateCounters() {

    if (counted) return;

    const resultSection =
        document.querySelector("#results");

    const top =
        resultSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counted = true;

        stats.forEach(counter => {

            const text =
                counter.innerText;

            const number =
                parseInt(text.replace(/\D/g, ""));

            const suffix =
                text.replace(/[0-9]/g, "");

            let count = 0;

            const speed =
                Math.max(15, number / 100);

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText =
                        Math.floor(count) + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

}

window.addEventListener(

    "scroll",

    animateCounters

);

animateCounters();



/*=========================================
    ACTIVE NAVIGATION
=========================================*/

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (

            window.scrollY >= top &&

            window.scrollY < top + height

        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===

            "#" + current

        ) {

            link.classList.add("active");

        }

    });

});



/*=========================================
    SMOOTH SCROLL
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =

            document.querySelector(

                link.getAttribute("href")

            );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



/*=========================================
    CONTACT FORM
=========================================*/

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(

        "✅ Thank you! Your message has been received.\n\nWe will contact you shortly."

    );

    form.reset();

});



/*=========================================
    HERO BUTTONS SMOOTH SCROLL
=========================================*/

document.querySelectorAll(".btn").forEach(btn => {

    const href = btn.getAttribute("href");

    if (href && href.startsWith("#")) {

        btn.addEventListener("click", e => {

            e.preventDefault();

            document.querySelector(href)

                .scrollIntoView({

                    behavior: "smooth"

                });

        });

    }

});



/*=========================================
        END
=========================================*/