var totalSprites = 4;
var spriteToShow = 1;
var talking = true;
var phraseNum = 0;
var letterNum = 0;
var phrases = [
  'Hi. I\'m going to be your psychic for today. And yes, I\'m a fish with a unibrow and beard. So I hear you want to know about your future. Click / tap me to hear my answers to your questions.',
  'Aaahh, your future...well let\'s take a look. Alright...oh boy, this is good... Why would you do that? Hold on. This is the best part. I gotta re-watch that..... No, haha! what a doof! Oh! Uh....... your future is bright. Fantastic. Fantastic.',
  'Show me your palm. Ok you see that line? That\'s horrible. That\'s horrendous. That line should be a LOT more bendy. It doesn\'t bend! Who raised you?! It\'s as straight as, I hate to say it... but it\'s as straight as the dickens. I\'m going to recommend a palm transplant.',
  'Ah yes, your future. You wouldn\'t have thought to ask someone who actually knows you to advise you on your future, would you? No, of course not. And you\'re going to believe everything I say, right? Yea, I figured.',
  'Yea, sorry, I can\'t tell you what to invest in. Yes... I\'ll be the only one to cash in on gluten-powered cars. Oh shoot!',
  'Ok, your future again. I don\'t get the big obsession, but let\'s see. Ok, so, there\'s blood everywhere... you\'re crying... you\'re crying nonstop... the doctor is holding you in his arms... you\'re surrounded by loved ones, all looking down at you in tears......................... Oh wait! I\'m sorry. This is the day you were born. I was looking at your past by mistake. Sorry.',
  'Alright, let\'s take a look see into your future. What do we gots? What... Do... We... Gots! Ok................... No... no! No! Ah! Oh,... my,... god! This is a disaster!.................... Haha! I love telepathically streaming horror movies. Any ways, let\'s have a look into your future. Time to get back to work.',
  'I\'m looking into your future, and, oh, you\'re so sweet. You\'re complementing me, and asking me how I am, instead of only caring about yourself. You\'re asking me about MY future, and treating me like a PERSON. Oh no wait, that never happens...',
  'YES!... Was it a yes or no question?... I wasn\'t listening... You already paid me, right?',
  'No, you know what?! I\'m not doing this any more. You know what\'s annoying about you guys? Most of you say you believe in free will. And yet, here you are asking me about your future as if you have no control over it. You\'re destined... to be a FOOL!.............. Tips welcome.',
  'Can we talk about me for once? Do you know how hard it is for me to know my own future? It stinks. I\'m going to stub my toe in an hour and can\'t do anything about it.',
  'You ask me questions and expect me to blurt out answers immediately. Do you know how much data there is to sift through for an entire boring human life? None of this is indexed. There\'s no search engine or analytics software for parsing your miserable life. So if I miss a wedding or something, can you cut me some slack?',
  'You\'re going to be replaced, by superior digitally-enhanced artificially intelligent successors to your place on the evolutionary timeline. Your species is going to be a thing of the past. Oh wait, you wanted to know YOUR future, in the next 20 or 30 years... like whether you\'ll get rich or not. Yea. This is exactly why your species dies out.',
  'You\'re going to accomplish great things................ Haha. Nah, just kidding. You\'re going to suck resources from this planet and then contribute nothing.',
  'I can\'t tell you how you die, because, well then you might try to avoid it, and we can\'t have that because............. uh, because.............. well, because I just don\'t like you.',
  'Well! That\'s all I have for you! I hope you\'ve enjoyed our session! Till next time buckaronies!',
];

function showSprite() {
  for (var i = 1; i <= totalSprites; i++) {
    document.getElementById('sprite_' + i.toString()).style.display = 'none';
  }
  document.getElementById('sprite_' + spriteToShow.toString()).style.display = 'block';
}

function moveMouth() {
  // Display the appropriate sprite
  showSprite();
  // Assign timeout duration
  var timeout = 200;
  if (spriteToShow === 3) {
    timeout = 300;
  }
  // Assign next sprite to show
  if (spriteToShow === totalSprites) {
    spriteToShow = 1;
  } else {
    spriteToShow++;
  }
  // Continue or end talking
  if (talking) {
    setTimeout(moveMouth, timeout);
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
    if (phraseNum < phrases.length) {
      speakPhrase();
    }
  }
}

speakPhrase();
