const text = "Designing Intelligent Enterprise AI Systems";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 55);
    }
}

window.onload = function () {
    typeWriter();
    animateCounters();
};

function animateCounters() {

    const counters = document.querySelectorAll("[data-target]");

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute("data-target"));

        let count = 0;

        const increment = Math.ceil(target / 50);

        const timer = setInterval(function () {

            count += increment;

            if (count >= target) {
                count = target;
                clearInterval(timer);
            }

            counter.innerText = count + "+";

        }, 30);

    });

}

window.addEventListener("scroll", function () {

    const cards = document.querySelectorAll(".card, .project, .timeline div");

    cards.forEach(function (card) {

        const position = card.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }

    });

});

document.querySelectorAll(".card, .project, .timeline div").forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";
});
