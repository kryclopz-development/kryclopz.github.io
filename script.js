const songQuotes = [
  "Never gonna give you up - Rick Astley",
  "It's all the damage in the end that makes me who I am - Caleb Hearm",
  "What you know about rollin' down in the deep? - Masked Wolf",
  "Hoping I'll see your face again - Jonas Blue",
  "They say I'm not ok - Robert Grace",
  "Well, good for you, you look happy and healthy - Olivia Rodrigo",
  "So save it, get gone, shut up - Dua Lipa",
  "Where we'll be together forever we're never gonna be apart - OR3O",
  "We'll be back in the morning when the sun starts to rise - Jonas Blue",
  "Don't cut me down, throw me out, leave me here to waste - Alec Benjamin",
  "Are you even gonna cross that line? - OR3O",
  "Climb the mountain up and down and run - CG5",
  "Fuck my life, I'm so tired - Sendi Hoxha",
  "And you're feeling like you got nowhere to go - Hannah Montana",
  "I don't wanna keep on wasting a life - Bri Tolani",
  "I wish I knew you wanted me - Steve Lacy",
  "I don't wanna go to sleep tonight - Lonely God",
  "It's not the same as it was - Harry Styles",
  "Like the sun gives into the moon into the night - Harley Bird",
  "Rather be alone - Cadmium",
  "You've been knocked down and got up again - Halvorsen",
  "Got a bit of business I'm gonna need to finish - CG5",
  "Is there a silver lining along the back of my mind? - WRLD",
  "I don't wanna walk this route on my own - CG5",
  "So come try and catch me if you can - EVERGLOW",
  "I fall apart sometimes - CG5",
  "We'll be raising our hands, shining up to the sky",
  "Some mistakes get made that's alright that's okay - Ashe",
  "Life is a highway, I wanna ride it all night long - Rascal Flatts",
  "Wait a minute, I think I left my consciousness in the 6th dimension - WILLOW",
  "Whenever you're around, I always seem to smile - Mirror Dancing With Becky",
  "I wish that I could be like the cool kids - Echosmith",
  "Promise me no promises - Cheat Codes",
  "I was afraid to leave you on your own - Halsey",
  "Is there ever gonna be a place in the spotlight just for me? - graywolfe",
  "Bring me back to where we started out - Jex",
  "We are linked together, together - Anna Yvette",
  "I'm not a quitter, I'm a winner and I'll win it all! - Derivakat",
  "But that's just my point of view - Cadence XYZ",
  "Wish I could rewind the things we do - Zach Hood",
  "I waited so long, I'll never move on - lullaboy",
  "I don't even know, I'm talking nonsense - Sabrina Carpenter",
  "This is how you do it, everybody move it - Solid Base",
  "Less is more my firend - CG5",
  "Start a new life, together in a different place - Khalid",
  "See the line where the sky meets the sea? It calls me - Alessia Cara",
  "Can't you forgive me? At least just temporarily - Ariana Griande",
  "I feel okay when I see you smile, smile - Ruth B.",
  "Why you always in a mood - 24kGoldn",
  "I ain't worried bout it - One Republic",
  "So lose your worries, let you problems go-o-o - Zenosyne",
  "Where you go I go to - RIELL",
  "I'll make a cup of coffee for your head - beabadoobee",
  "Life goes on, and on, and on, and on, and on, and - Oliver Tree",
  "I'm sad I know, yeah, I'm sad I know, yeah - XXXTENTACION",
  "And if you knock knock me over, I will get back up again - Anna Kendrick",
  "You're the only on that gave me hope - Alec Benjamin",
  "Do you ever get a little bit tired of life? - Em Beihold",
  "Can we just be happy now? - Jake Scott",
  "The night fades away and now I finally find you - Derivakat",
  "Bring back everything I used to see - CG5",
  "You'll be brighter than the stars - Camila Mora",
  "I wanna cut through the clouds, break the ceiling! - Carly Rae Jepsen",
  "I'm sorry, don't leave me, I want you here with me - Dylan Matthew",
  "But if you close your eyes, does it almost feel like nothings changed at all? - Pompeii"
]

const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const quotesTab = document.getElementById('tab_songQuotes');
const myTime = document.getElementById('myTime');

const tabs = tab => {
  let newTabEl = document.getElementById(tab);
  let newTabContentEl = document.getElementById(`tab_${tab}`);
  let prevTab = rs.getPropertyValue('--active_tab') || 'aboutMe';
  let prevTabContentEl = document.getElementById(`tab_${prevTab}`);

  if (tab == prevTab) return;

  let prevTabEl = document.getElementById(prevTab);

  r.style.setProperty('--active_tab', tab);

  newTabEl.style.setProperty('font-weight', 'bold');
  prevTabEl.style.setProperty('font-weight', 'normal');

  newTabEl.style.setProperty('color', 'white');
  prevTabEl.style.setProperty('color', 'gray');

  newTabContentEl.style.setProperty('display', 'block');
  prevTabContentEl.style.setProperty('display', 'none');
}

songQuotes.forEach(q => {
  let p = document.createElement('p');

  p.innerHTML = q;

  quotesTab.append(p, document.createElement('br'))
})

const updateTime = () => {
  myTime.innerHTML = `My Time: ${new Date().toLocaleDateString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: 'numeric', second: 'numeric' })}`
}

setInterval(updateTime, 1000);

updateTime();