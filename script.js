/* ==========================================
   AI Portfolio V2
   Kunche Reddy Pavani
========================================== */

/* ==========================================
Typewriter Animation
========================================== */

const phrases = [

"Generative AI Engineer",

"Enterprise AI Architect",

"LLM & RAG Specialist",

"Machine Learning Engineer",

"Building Intelligent Systems"

];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeWriter(){

if(!typing) return;

let current = phrases[phraseIndex];

if(!deleting){

typing.textContent =
current.substring(0,letterIndex+1);

letterIndex++;

if(letterIndex === current.length){

deleting = true;

setTimeout(typeWriter,1500);

return;

}

}else{

typing.textContent =
current.substring(0,letterIndex-1);

letterIndex--;

if(letterIndex===0){

deleting=false;

phraseIndex++;

if(phraseIndex>=phrases.length){

phraseIndex=0;

}

}

}

setTimeout(
typeWriter,
deleting ? 40 : 90
);

}

/* ==========================================
Animated Dashboard Counters
========================================== */

function animateCounters(){

const counters =
document.querySelectorAll(".metric-value");

counters.forEach(counter=>{

const target =
parseInt(
counter.getAttribute("data-target")
);

let count = 0;

const increment =
Math.ceil(target/80);

const timer =
setInterval(()=>{

count += increment;

if(count>=target){

count=target;

clearInterval(timer);

}

counter.innerHTML =
count + "+";

},25);

});

}

/* ==========================================
Reveal Elements On Scroll
========================================== */

function revealElements(){

const elements =
document.querySelectorAll(

".metric-card,.project-card,.timeline-content,.contact-card,.skill-chip"

);

elements.forEach(el=>{

const top =
el.getBoundingClientRect().top;

const visible =
window.innerHeight - 80;

if(top < visible){

el.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

/* ==========================================
Generate Floating Particles
========================================== */

function createParticles(){

const container =
document.getElementById("particles");

if(!container) return;

for(let i=0;i<70;i++){

const particle =
document.createElement("span");

particle.className="particle";

particle.style.left =
Math.random()*100+"%";

particle.style.top =
Math.random()*100+"%";

particle.style.animationDuration =
(8+Math.random()*10)+"s";

particle.style.animationDelay =
Math.random()*5+"s";

particle.style.opacity =
Math.random()*.5;

container.appendChild(
particle
);

}

}

/* ==========================================
Mouse Glow Effect
========================================== */

document.addEventListener(

"mousemove",

function(e){

const glow =
document.getElementById(
"cursorGlow"
);

if(!glow) return;

glow.style.left =
(e.clientX-125)+"px";

glow.style.top =
(e.clientY-125)+"px";

}

);

/* ==========================================
Scroll Progress Bar
========================================== */

window.addEventListener(

"scroll",

function(){

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop/height)*100;

const bar =
document.querySelector(
".scroll-progress"
);

if(bar){

bar.style.width =
progress+"%";

}

}

);

/* ==========================================
Navbar Active Section
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".navbar a"
);

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 120;

if(window.scrollY>=sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(

link.getAttribute("href")
==
"#"+current

){

link.classList.add(
"active"
);

}

});

}

);

/* ==========================================
AI Console Boot Sequence
========================================== */

function bootConsole(){

const consoleDiv =
document.getElementById(
"ai-console"
);

if(!consoleDiv) return;

const lines=[

"Initializing Enterprise AI Profile...",

"Loading Knowledge Graph...",

"Loading Experience Matrix...",

"Connecting Vector Database...",

"Loading LLM Skills...",

"Loading Machine Learning Models...",

"Checking Semantic Search Engine...",

"Preparing AI Copilot Services...",

"Loading Enterprise Projects...",

"Establishing Cloud Connectivity...",

"AI Portfolio Ready.",

"System Status : ONLINE"

];

consoleDiv.innerHTML="";

let index=0;

function addLine(){

if(index>=lines.length){

return;

}

const row=
document.createElement("div");

row.innerHTML=
"> " + lines[index];

consoleDiv.appendChild(
row
);

consoleDiv.scrollTop=
consoleDiv.scrollHeight;

index++;

setTimeout(
addLine,
450
);

}

addLine();

}

/* ==========================================
Skill Chip Hover Effect
========================================== */

const chips =
document.querySelectorAll(
".skill-chip"
);

chips.forEach(chip=>{

chip.addEventListener(

"mouseenter",

function(){

chip.style.transform=
"translateY(-5px) scale(1.05)";

}

);

chip.addEventListener(

"mouseleave",

function(){

chip.style.transform=
"translateY(0px) scale(1)";

}

);

});

/* ==========================================
Smooth Scroll
========================================== */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

document.querySelector(

this.getAttribute(
"href"
)

).scrollIntoView({

behavior:"smooth"

});

}

);

});

/* ==========================================
Startup
========================================== */

window.onload=function(){

typeWriter();

animateCounters();

revealElements();

createParticles();

bootConsole();

};

/* ==========================================
Console Easter Egg
========================================== */

console.log("""

========================================

Kunche Reddy Pavani

Generative AI Engineer

LLMs | RAG | Enterprise AI

LinkedIn:
https://www.linkedin.com/in/pavani-kunche-254239413

Email:
pavanikunche.92@gmail.com

Building Intelligent Systems
for Enterprise Innovation

========================================

""");
