const phrases = [
  "Generative AI Engineer",
  "LLM Specialist",
  "Enterprise AI Architect",
  "Machine Learning Engineer"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeWriter() {

  if (!typing) return;

  const current = phrases[phraseIndex];

  if (!deleting) {

    typing.textContent =
      current.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === current.length) {

      deleting = true;

      setTimeout(typeWriter, 1500);

      return;
    }

  } else {

    typing.textContent =
      current.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      phraseIndex++;

      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }

    }

  }

  setTimeout(
    typeWriter,
    deleting ? 40 : 80
  );
}

window.onload = function () {
  typeWriter();
};
