const wordBank = {
    english: [
        { word: "Hope", translation: "A feeling of expectation" },
        { word: "Dream", translation: "A vision or goal" },
        { word: "Courage", translation: "The ability to face fear or difficulty with brave" },
        { word: "Love", translation: "A deep feeling of affection and care" },
    ],
    turkish: [
        { word: "Elma", translation: "Apple" },
        { word: "Ev", translation: "House" },
        { word: "Araba", translation: "Car" },
        { word: "Kitap", translation: "Book" },
    ],
    german: [
        { word: "Apfel", translation: "Apple" },
        { word: "Haus", translation: "House" },
        { word: "Auto", translation: "Car" },
        { word: "Buch", translation: "Book" },
    ],

};

let currentLanguage = "english";
let currentIndex = 0;
let isFlipped = false;

const languageSelect = document.getElementById("language-select");
const wordDisplay = document.getElementById("word-display");
const translationDisplay = document.getElementById("translation-display");
const progressTracker = document.getElementById("progress-tracker");

function loadCard() {
    const words = wordBank[currentLanguage];
    wordDisplay.textContent = words[currentIndex].word;
    translationDisplay.textContent = isFlipped
        ? words[currentIndex].translation
        : "";
    progressTracker.textContent = `Card ${currentIndex + 1}/${words.length}`;
}

languageSelect.addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    currentIndex = 0;
    loadCard();
});

document.getElementById("flip-btn").addEventListener("click", () => {
    isFlipped = !isFlipped;
    loadCard();
});

document.getElementById("next-btn").addEventListener("click", () => {
    const words = wordBank[currentLanguage];
    currentIndex = (currentIndex + 1) % words.length;
    isFlipped = false;
    loadCard();
});

loadCard();