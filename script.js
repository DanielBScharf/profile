const info = "Daniel Scharf is a former English teacher, educator, and tutoring center administrator who is currently changing his career to software and web development. Daniel has about eight years of experience teaching English abroad, six years in tutoring center administration, and five years working with curriculum design. Outside of academia Daniel also worked as a cook for about 10 years. Daniel's personal interests include computer games, Dungeons and Dragons, cooking, traveling, bike riding, and napping with his cat.";

const paragraph = document.querySelector('.paragraph');
const original = "Daniel Scharf is a former English teacher, educator, and tutoring center administrator who is currently changing his career to software and web development.";

paragraph.onmouseover = function () {
  paragraph.innerText = info;
};
paragraph.onclick = function () {
  paragraph.innerText = original;
};
