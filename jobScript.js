
const souInfo = {
  name: "Southern Oregon University",
  location: "Ashland Oregon",
  jobTitle: "Coordinator of library student support services",
  duties: "Tutor training, training program creation, cross departmental communication to advance the tutoring center, promotions, scheduling, payroll, organizational, supervising tutors, etc.",
  photo: 'images/sou.png',
  link: 'https://sou.edu/'
};

const tiuInfo = {
  name: "Tokyo International University",
  location: "Kawagoe Japan",
  jobTitle: "Global Teaching Fello, lecturer",
  duties: "English teaching, tutuoring, academic literacy teaching. Curriculum design for Academic Literacy course, curriculum liaison to other teachers. Co Founder and coordinator/administrator of the Peer Advisers for Writing program for English medium instruction students at TIU, April 2017.",
  photo: 'images/tiu.png',
  link: 'https://www.tiu.ac.jp/etrack/'
};

const psuInfo = {
  name: "Portland State University",
  location: "Portland Oregon",
  jobTitle: "Intensive English Language Program Tutor",
  duties: "Helped students one on one with questions and problems with reading, speaking, pronunciation, writing, grammar, and vocabulary.",
  photo: 'images/psu.png',
  link: 'https://www.pdx.edu/'
};

const owcaInfo = {
  name: "Online Writing Center Association",
  location: "Online/Global",
  jobTitle: "Volunteer Website Coordinator",
  duties: "Maintaining and updating website, fixing problems that arise, optimising web problems. Learning PHP to fix more advanced problems with WordPress sites",
  photo : "images/owca.png",
  link: 'https://www.onlinewritingcenters.org/'
}

const owca = document.querySelector('.owca');
const owcaCard = document.querySelector('.owcaCard');
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
  infoCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${job.photo}" class="card-img-top" alt="logo for ${job.name}">
  <div class="card-body">
    <h5 class="card-title">${job.name}</h5>
    <p class="card-text">${job.location}</p>
    <p class="card-text">${job.jobTitle} ${job.duties}</p>
  </div>
</div>`;
  card.appendChild(infoCard);
};

sou.addEventListener('click', function() {infoCard(souInfo, souCard);
  sou.classList.add('hidden');
  souCard.addEventListener('click', function (){
    souCard.firstChild.remove();
    sou.classList.remove('hidden');
  });
});

psu.addEventListener('click', function() {infoCard(psuInfo, psuCard);
  psu.classList.add('hidden');
  psuCard.addEventListener('click', function (){
    psuCard.firstChild.remove();
    psu.classList.remove('hidden');
  });
});

tiu.addEventListener('click', function() {infoCard(tiuInfo, tiuCard);
  tiu.classList.add('hidden');
  tiuCard.addEventListener('click', function (){
    tiuCard.firstChild.remove();
    tiu.classList.remove('hidden');
  });
});

owca.addEventListener('click', function() {infoCard(owcaInfo, owcaCard);
  owca.classList.add('hidden');
  owcaCard.addEventListener('click', function (){
    owcaCard.firstChild.remove();
    owca.classList.remove('hidden');
  });
});
