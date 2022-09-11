var messageButton = document.querySelector('.message-button')
var affirmationCircle = document.querySelector('.affirmation')
var mantraCircle = document.querySelector('.mantra')
var innerPeace = document.querySelector('.inner-peace')
var messageSection = document.querySelector('.message-section')

var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"If you're a devil, how come you're not wearing Prada?!",
"I am worthy of my dreams.",
"I am enough.",
"Birth is a curse and existence is a prison.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"God is dead and we have killed him.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
"The world is empty. There is no point to anything and we're all gonna die."
]

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "Shirley Temple killed JFK.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "Not a girl.",
  "Oh, he is from Florida? Yeah, he belongs in The Bad Place.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The point is, people improve when they get external love and support. How can we hold it against them when they don’t?",
  "I'm gonna be the velocoraptor!",
  "The only constant is change.",
  "Onward and upward.",
  "We do nothing. We hope that our early successes make up for the embarrassing mess we’ve become. Like Facebook. Or America.",
  "I am the sky, the rest is weather."
]

messageButton.addEventListener("click", returnHappiness);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function returnHappiness() {
  console.log("I'm a button")
  if (affirmationCircle.checked) {
  showMessage = affirmations[getRandomIndex(affirmations)]
  console.log(showMessage)
  } if (mantraCircle.checked) {
  showMessage = mantras[getRandomIndex(mantras)]
  console.log(showMessage)
  }
  innerPeace.classList.add('hidden')
  messageSection.innerText = showMessage
}
