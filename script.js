var moods = ["happy", "sad", "angry", "tired", "bored"];
happyLines = [
  "Yay! Keep smiling and pass that energy on — you're glowing ✨",
  "Happiness looks great on you 😄 Keep riding the good vibes!",
  "Your joy is contagious! Spread that positivity like confetti 🎉",
];
sadLines = [
  "It's okay to feel sad. You're not alone, and this moment will pass 💙",
  "Crying isn’t weakness — it’s a reset. Be kind to yourself today 💧",
  "Sadness is just a chapter, not the whole story. Tomorrow is a new page 📖",
];
angryLines = [
  "Take a deep breath. Step back. You’ve got the strength to handle this 💪",
  "Anger is natural — but don’t let it control you. 🔥🧊",
  "Channel that anger into something positive. Let it fuel your fire for change! 🔥",
];
tiredLines = [
  "Rest is not a luxury, it's a necessity. Take a break and recharge 💤",
  "Even the strongest need to pause. Your well-being matters the most 🌙",
  "Feeling tired? Listen to your body. A little self-care goes a long way! 🌼",
];
boredLines = [
  "Boredom is just a sign that you need to try something new! Explore and discover ⭐",
  "Boredom can spark creativity. Use this time to dream up something amazing! 🎨",
  "Turn boredom into adventure! Try a new hobby or revisit an old one! 🚀",
];
tips = [
    "Call a friend or loved one to share a laugh or chat! 📞",
    "Watch a funny video or read a joke to brighten your day! 😂",
    "Do a quick stretch to relieve tension and refresh your body! 🤸‍♂️",
    "Engage in a hobby you love to reignite your passion! 🎨",
    "Take a moment to breathe deeply and center yourself! 🌬️",
    "Step outside and enjoy the fresh air and sunshine! ☀️",
    "Write down your thoughts to clear your mind and gain perspective! 📝",
    "Try a new recipe or cook your favorite meal to enjoy! 🍽️",
    "Read a book or listen to an audiobook to escape into another world! 📚",
];

quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
]

function moodHandler()
{
    const mood = document.querySelector('input[name="mood"]:checked');
    const moodMsg = document.getElementById('moodMsgResponse')
    if(!mood)
    {
        alert("Don't you have any mood selected? 🤨");
        return;
    }

    const selectedMood = mood.value;
    
    switch(selectedMood){
    case "happy":
        moodMsg.innerHTML = happyLines[Math.floor(Math.random() * happyLines.length)];
        break;
    case "sad":
        moodMsg.innerHTML = sadLines[Math.floor(Math.random() * sadLines.length)];
        break;
    case "angry":
        moodMsg.innerHTML = angryLines[Math.floor(Math.random() * angryLines.length)];
        break;
    case "tired":
        moodMsg.innerHTML = tiredLines[Math.floor(Math.random() * tiredLines.length)];
        break;
    case "bored":
        moodMsg.innerHTML = boredLines[Math.floor(Math.random() * boredLines.length)];
        break;

    }
}


function randomQuote(){
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = quote;
}

function themeChange()
{
  document.body.classList.toggle("dark-theme");
}

function randomTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("randomTipDisplay").innerHTML = tip;
}

document.addEventListener("DOMContentLoaded", () => {
  const tipBtn = document.getElementById("randomTip");
  tipBtn.addEventListener("click", randomTip);
})