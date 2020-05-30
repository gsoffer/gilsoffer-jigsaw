var totalSprites = 2;
var spriteToShow = 1;
var talking = true;
var playingAudio = false;
var phraseNum = 0;
var letterNum = 0;
var phrases = [
  'Hi, welcome to Meditation Tips with the Devil. I’m your host, and friendly neighborhood demon. I\'m also the lord of the underworld. If you\'re interested in meditation tips, then let\'s not keep waitin\'. Look no further than Satan. Click / tap me to hear my advice.',
  'Well alright. Let\'s start slow, and begin by letting the warm sound of crackling hell flames sooth your tainted soul. Ah, that\'s nice.',
  'Now, focus on any scents you’re picking up around you, such as the rotting carcass of a slain war goat, or a dandelion.',
  'It\'s nice to find a good place to meditate. I like to take a short trip out to the depths of oblivion. It’s very peaceful and serene, since nothing can survive there but me. But find YOUR oblivion.',
  'If you find your mind wandering during meditation, you may very well have been possessed by a banshee. If so, calmly recite the appropriate incantation to summon the fiendish undead wolf-bird to slaughter the banshee and break the spell.',
  'Now, if your ego has drawn your attention away with distracting thoughts, quietly threaten to slit its throat, and gently bring your attention back to your breath.',
  'If you find yourself thinking, "Hey, aren\'t you responsible for all the pains in my life, since you\'re the devil? Can\'t you just make those things go away instead of giving me meditation tips?", then gently bring your attention back to your DEATH... errr breath... and never focus on that again. Good... We\'re doing great!',
  'Ok, and if you\'ve sold me your soul and are here to request it be returned, note that there are no refunds. But if you give me a subscribe, I\'ll see what I can do. It sure wouldn\'t "kill you", am I right?!',
  'If you feel like something is missing from your life, like something has been lost......., check behind your ear........ Did it work?..... Shoot, I\'ve been rusty on my black magic these days.',
  'When you feel like the world is crumbling around you, remember what my mom always told me: "When life gives you lemons, squeeze them into the eyes of your enemies and impale them on the sacrificial alter of Cthulu." .... But maybe also send love to the world or something.',
  'If you find it difficult to keep your eyes closed as you meditate, try simply rolling your eyes completely into the back of your head.',
  'To relax after meditating, try a nice herbal tea. When death himself visits you to reap your soul, it\'s common courtesy to offer such an herbal tea, and maybe some biscuits, perhaps even milk and cookies, before the ceremony.',
  'And if the angels have waged war upon your realm, you should seriously stop your meditation and get out of there. Seriously. It\'s dangerous.',
  'If you think I\'m the devil, you should meet my mother in law. Buh-dooh-Ch! Where\'s my rim shot? A mandatory rim shot is in your eternal contract, Jimmy. Jimmy! Where is he? This guy\'s so annoying. Man, I\'m so angry! I gotta meditate.',
  'One last thing. If you\'re looking for a job, my nephew runs a tech startup: "Our mission is to revolutionalize Murphy\'s law. We allow bad things to happen to good people in realtime. Implementation was once a nightmare - it required flawless communication, and even then, there were always delays, and bad things would happen at different times, sometimes leaving people completely able to bounce back emotionally. We have the best developers in hell putting up servers that are able to grind through a satanic amount of data in realtime, creating tragedies within nanoseconds of one other". So just pass along your resume if so. Thanks!',
  'Well, that\'s all I have for you. I hope you\'ve enjoyed these tips. See you in hell!',
];

function playAudio() {
  if (! playingAudio) {
    document.getElementById('fireplace').loop = true;
    document.getElementById('fireplace').play();
    playingAudio = true;
  }
}

function showSprite() {
  for (var i = 1; i <= totalSprites; i++) {
    document.getElementById('sprite_' + i.toString()).style.display = 'none';
  }
  document.getElementById('sprite_' + spriteToShow.toString()).style.display = 'block';
}

function moveMouth() {
  // Display the appropriate sprite
  showSprite();
  // Assign next sprite to show
  if (spriteToShow === totalSprites) {
    spriteToShow = 1;
  } else {
    spriteToShow++;
  }
  // Continue or end talking
  if (talking) {
    setTimeout(moveMouth, 200);
  } else {
    spriteToShow = 1;
    showSprite();
  }
}

function speakPhrase() {
  var letters = phrases[phraseNum].split('');
  if (letterNum === 0) {
    talking = true;
    document.getElementById('speech_bubble').innerHTML = '';
    moveMouth();
  }
  if (letterNum < letters.length) {
    document.getElementById('speech_bubble').innerHTML += letters[letterNum];
    letterNum++;
    setTimeout(speakPhrase, 60);
  } else {
    talking = false;
    letterNum = 0;
    phraseNum++;
  }
}

function talk() {
  if (! talking) {
    playAudio();
    if (phraseNum < phrases.length) {
      speakPhrase();
    }
  }
}

speakPhrase();
