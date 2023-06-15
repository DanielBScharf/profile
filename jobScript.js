
const souInfo = {
  name: "Southern Oregon University",
  location: "Ashland Oregon",
  jobTitle: "Coordinator of library student support services",
  duties: "Tutor training, training program creation, cross departmental communication to advance the tutoring center, promotions, scheduling, payroll, organizational, supervising tutors, etc.",
  photo: 'images/sou.png'
};

const tiuInfo = {
  name: "Tokyo International University",
  location: "Kawagoe Japan",
  jobTitle: "Global Teaching Fello, lecturer",
  duties: "English teaching, tutuoring, academic literacy teaching. Curriculum design for Academic Literacy course, curriculum liaison to other teachers. Co Founder and coordinator/administrator of the Peer Advisers for Writing program for English medium instruction students at TIU, April 2017.",
  photo: 'images/tiu.png'
};

const psuInfo = {
  name: "Portland State University",
  location: "Portland Oregon",
  jobTitle: "English Tutor",
  duties: "Helped students one on one with questions and problems with reading, speaking, pronunciation, writing, grammar, and vocabulary.",
  photo: 'images/psu.png'
};

const sou = document.querySelector(".sou");
const souCard = document.querySelector(".souCard");
const psu = document.querySelector(".psu");
const psuCard = document.querySelector(".psuCard");
const tiu = document.querySelector(".tiu");
const tiuCard = document.querySelector(".tiuCard");
const presentations = document.querySelector(".presentations");
const presList = document.querySelector(".presList")

const infoCard = (job, card) => {
  let infoCard = document.createElement('div');
  let location = document.createElement('p');
  let title = document.createElement('p');
  let duties = document.createElement('p');
  let name = document.createElement('h3');
  let image = document.createElement('div');
  name.innerText = job.name;
  location.innerText = job.location;
  title.innerText = job.jobTitle;
  duties.innerText = job.duties;
  image.innerHTML = `<img src=${job.photo}>`;
  infoCard.classList.add("floating-card");
  infoCard.appendChild(image);
  infoCard.appendChild(name);
  infoCard.appendChild(location);
  infoCard.appendChild(title);
  infoCard.appendChild(duties);
  card.appendChild(infoCard);
};

sou.addEventListener('mouseover', function() {infoCard(souInfo, souCard);
  sou.classList.add('hidden');
  souCard.addEventListener('mouseout', function (){
    souCard.firstChild.remove();
    sou.classList.remove('hidden');
  });
});

psu.addEventListener('mouseover', function() {infoCard(psuInfo, psuCard);
  psu.classList.add('hidden');
  psuCard.addEventListener('mouseout', function (){
    psuCard.firstChild.remove();
    psu.classList.remove('hidden');
  });
});

tiu.addEventListener('mouseover', function() {infoCard(tiuInfo, tiuCard);
  tiu.classList.add('hidden');
  tiuCard.addEventListener('mouseout', function (){
    tiuCard.firstChild.remove();
    tiu.classList.remove('hidden');
  });
});
