const images = [
    '/img/86015-416.jpg',
    '/img/anBn.png',
    '/img/einar.png',
    '/img/st.png',
    '/img/pt.png',
    '/img/HA.png'

];

const headshotImages = [
    '/img/Olle_Nordberg.png',
    '/img/ragnar.png',
    '/img/vangog.png',
    '/img/cm.png',
    '/img/jj.png',
    '/img/HAH.png'


];

const infoTexts = [
    'Olle Nordberg var en uppskattad konstnär som studerade vid Konstakademin. Han ställde ut flitigt och är representerad på flera svenska museer, inklusive Moderna Museet i Stockholm. Hans målningar kännetecknas av en barnboksliknande estetik som samtidigt har ett djupt och komplext symboliskt innehåll.',
    'Genom ett liv präglat av intensiv skaparlust utvecklade Van Gogh ett uttryck som blev djupt inflytelserikt. Han deltog i få utställningar men finns idag på många museer. Hans målningar förenar kraftfull färgkänsla med psykologiskt laddade motiv och symbolik i sitt konstnärliga arbete.',
    'Med en tydlig känsla för form och berättelse skapade Ragnar Johansson ett särpräglat konstnärskap som väckte bred uppskattning. Han visade sina verk regelbundet och finns representerad på flera museer. Hans målningar förenar stillsam poesi med förtätade motiv och symbolik i varje penseldrag.',
    'Genom att utforska gränsen mellan bild och idé etablerade Jasper Johns ett banbrytande konstnärligt uttryck som fick stor betydelse. Han ställde ut internationellt och finns på många museer. Hans målningar kombinerar grafisk klarhet med konceptuellt komplexa motiv och symbolik i sitt skapande.',
    'Genom noggranna studier av ljusets skiftningar utvecklade Claude Monet ett måleriskt språk som kom att forma impressionismen. Han deltog aktivt i grupputställningar och finns på många museer. Hans målningar förenar atmosfäriskt djup med vibrerande motiv och poetisk symbolik i hela sin produktion.',
    'Hehehha'
];


const showcaseImage = document.getElementById('shocase1');
const headshotImage = document.getElementById('headshotimg'); 
const infoTextElement = document.getElementById('infoTEXT'); 
const leftButton = document.getElementById('leftbutton');
const rightButton = document.getElementById('rightbutton');


let currentIndex = 0;

function updateImage() {
    showcaseImage.src = images[currentIndex];
    headshotImage.src = headshotImages[currentIndex];
    infoTextElement.innerHTML = infoTexts[currentIndex];
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', prevImage);

document.addEventListener('DOMContentLoaded', updateImage);