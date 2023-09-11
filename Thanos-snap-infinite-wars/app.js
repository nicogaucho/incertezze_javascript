import { getCharatersInfinityWar } from "./api.js";
// modalita con fetch senza export import modules 
// function getCharacterData() {
//   if (localStorage.characterData) {
//     return Promise.resolve(JSON.parse(localStorage.characterData));
//   }

//   return fetch(charactersURL)
//     .then(response => response.json())
//     .then(data => {
//       localStorage.characterData = JSON.stringify(data);
//       return data;
//     });
// }

// getCharacterData()
//   .then(charatersData => {
//     console.log(charatersData)
//   });
const audioIntro = new Audio('sounds/Intro.mp3');
document.body.addEventListener("click", function () {
  audioIntro.muted = false;
  audioIntro.play();
})

const charaters = document.querySelector('#charaters');
const thanoSnap = document.querySelector('#thanoSnap'); 
const snapImg = document.querySelector("#snapImg");

function getDataFromCache() {
  // se esiste l'oggetto charatersData nel localStorage predili di li 
  if (localStorage.charatersData) {
    console.log("Calling from LocalStorage dude 😄")
    return JSON.parse(localStorage.charatersData)
  } else {
    // altrimemti fai la chiamata e setta lo storage... 
    console.log("Calling from Marvel API 😄")
    return getCharatersInfinityWar()
  }
}

const { data: {results} } = getDataFromCache();

console.log(results)

function addCharartesToPage() {

  results.forEach(element => {
    if (element.id !== 1009652 && !element.thumbnail.path.includes("image_not_available")) {
      const img_path = element.thumbnail.path + "/standard_medium.jpg";
      const cardImg = document.createElement('div')
      cardImg.className = "charaterCard";
      cardImg.style.transform = "scale(1)"; 
      cardImg.style.transition = "1s";
      cardImg.classList.add("card")
      cardImg.innerHTML = `
        <div>
          <img src="${img_path}" alt="thanos">
          <p>${element.name}</p>
        </div>      
      `
      charaters.appendChild(cardImg)
    }
  });
}

addCharartesToPage()

thanoSnap.addEventListener('click', () => {
  snapImg.style.opacity = 1

  setTimeout(() => {
    audioIntro.pause();
    audioIntro.currentTime = 0; 
    snapImg.style.opacity = 0;
    audioIntro.src = 'sounds/Funeral.mp3'
    audioIntro.play();
    balanceUniverse(); 
  }, 5000);
})


function balanceUniverse() {
  // select all the charaterCard
  const characters = [...document.querySelectorAll('.charaterCard')]
  let leftToDie = Math.floor(characters.length / 2);
  console.log('Balancing universe, begin killing', leftToDie, 'characters');
  kill(characters, leftToDie);
}

function kill(characters, leftToDie) {
  if (leftToDie > 0) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const [characterChosen] = characters.splice(randomIndex, 1)

    console.log('Killing...', characterChosen);
    characterChosen.style.transform = 'scale(0)'
    setTimeout(() => {
      kill(characters, leftToDie - 1);
    }, 1500);
  }
}