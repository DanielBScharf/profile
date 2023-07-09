const info = "Daniel Scharf is a former English teacher, educator, and tutoring center administrator who has changed his career to software and web development. Daniel has about eight years of experience teaching English abroad, six years in tutoring center administration, and five years working with curriculum design. Outside of academia Daniel also worked as a cook for about 10 years. Daniel's personal interests include coding, computer games, Dungeons and Dragons, cooking, traveling, bike riding, acting, and napping with his cat.";

const paragraph = document.querySelector('.paragraph');
const original = "Daniel Scharf is a former English teacher, educator, and tutoring center administrator who has changed his career to software and web development.";

paragraph.onmouseover = function () {
  paragraph.innerText = info;
};
paragraph.onmouseout = function () {
  paragraph.innerText = original;
};

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 400px)").matches) {
    paragraph.onclick = function () {
      paragraph.innerText = info;
      paragraph.classList.add('clicked');
    };
    if (paragraph.classList.contains('clicked')) {
      paragraph.onclick = function () {
        paragraph.innerText = original;
        paragraph.classList.remove('clicked');
      };
    }
  }
})
