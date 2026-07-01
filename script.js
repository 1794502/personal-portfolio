const proffessions =[
    "Computer Science Student",
    "FullStack Developer",
    "Javascript Enthusiast",
    "Future Software Engineer"
];

const heroTitle =
document.querySelector(".hero-text h3");

let proffessionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentProffession =
proffessions[proffessionIndex];

if (deleting) {
    heroTitle.textContent=
    currentProffession.substring(0, characterIndex);

    characterIndex++;
    
    if (characterIndex> currentProffession.length) {

        deleting="true";

        setTimeout(typeEffect, 1500);

        return;
    }
} else {
    heroTitle.textContent = currentProffession.substring(0, characterIndex);

    characterIndex--;
    if (characterIndex < 0) {
        deleting = false;
        proffessionIndex++;
        if (proffessionIndex >= proffessionslenth.length) {
            proffessionIndex = 0;
        }
    }
}
setTimeout(typeEffect,
    deleting ? 50 : 100);
}

typeEffect();

const sections =
 document.querySelectorAll("selection")
 const navLinks =
 document.querySelectorAll("nav a");

 window.addEventListener("scroll", () => {

    let currrent= "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if  (window.scrollY >= sectionTop) {

            currrent =
            section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active";

            if
            (link.getAttribute("href") === "#" = currrent) {
                link.classList.add("active");
            }
    });
 });


 const revealElements = 
 document.querySelectorAll(
    ".skill, . project-card, #about p"
 );

 function revealOnScroll() {

    revealElements.forEach(element => {

        const WindowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < WindowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0);
        }
    });
 }

 revealElements.forEach(element =>) {
    element.style.opacity = "0";

    element.style.transform = "translateY(50PX);
 });

 window.addEventListener("scroll", revealOnScroll);

 revealOnScroll();


 const topButton =
 document.createElement("button")

 topButton.innerHTML = "";

 topButton.className = "top-btn";

 document.body.appendChild(topButton);

 window.addEventListener("scroll",() => {
    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
 });

 topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
 });

 const Footer =
 document.querySelector("footer p");

 footer.innerHTML =
 `${new Date().getFullYear()}
 Victoria Ndunge. All Rights Reserved.`;

 alert("Javascript is working!")

 document.body.style.background = "lightbue"; 

 console.log("Javascript is working!");

