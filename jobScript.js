
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

const conferences = {
  pres1: ["Use what you have: Helping Sri Lankan academics create tutoring centers at their universities", "International Writing Center Association (IWCA) Annual Conference, October 2022, Vancouver, Canada."],
  pres2: ["Supporting Students with a Tutoring Center", "Online workshops organized through the Education Expansion and Development (AHEAD) Operation and the Sri Lankan Ministry of Education."],
  pres3: ["Training of Trainers (ToT) to Develop Academic Literacy among Undergraduates", "Online workshops organized through the Education Expansion and Development (AHEAD) Operation and the Sri Lankan Ministry of Education"],
  pres4: ["Academic Literacy in an EMI Context: A Workshop", "Online workshops organized through the Education Expansion and Development (AHEAD) Operation and the Sri Lankan Ministry of Education"],
  pres5: ["Beyond the writing center: Inviting peer tutors into the classroom to help with the writing process", "International Writing Center Association Japan"],
  pres6: ["Students Helping Students: An Introduction to the TIU Peer Writing Center", "Thai TESOL conference"],
  pres7: ["Growing a Curriculum: Blending Analytical Reading and Writing Courses to Maximize Student Success", "Saitama JALT Conference"]
}

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

const listPresentations = (conference) => {
  conference.values(value).forEach(value => {
    let presentationName = document.appendChild('li');
    let presentationLocation = document.appendChild('li');
      presentationName.innerText = value[0];
      presentationLocation.innerText = value[1];
    });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

presentations.addEventListener('click', function() {
  for (const [value] of Object.enteries(conferences)){
    let presentationName = document.appendChild('li');
    let presentationLocation = document.appendChild('li');
      presentationName.innerText = value[0];
      presentationLocation.innerText = value[1];
  };
  presList.addEventListener('click', removeAllChildNodes(presentations));
    presentations.classList.remove("hidden");
});



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
