/* CanVerse page management, learning interactions and mini-game. */

// -------------------- PAGE MANAGEMENT --------------------
const allPages = document.querySelectorAll(".page");
const allNavButtons = document.querySelectorAll(".nav-button");
const homeNav = document.querySelector("#homeNav");
const benefitsNav = document.querySelector("#benefitsNav");
const regulationsNav = document.querySelector("#regulationsNav");
const quizNav = document.querySelector("#quizNav");
const gameNav = document.querySelector("#gameNav");
const homeButton = document.querySelector("#homeButton");
const benefitsStart = document.querySelector("#benefitsStart");
const gameStart = document.querySelector("#gameStart");
const menuButton = document.querySelector("#menuButton");
const menuLabel = document.querySelector("#menuLabel");
const mainNav = document.querySelector("#mainNav");
const soundButton = document.querySelector("#soundButton");

var currentPage = 1;
var soundOn = true;

const clickAudio = new Audio("audio/click.wav");
const correctAudio = new Audio("audio/correct.wav");
const wrongAudio = new Audio("audio/wrong.wav");

function playSound(audioObject) {
    if (soundOn == true) {
        audioObject.play();
    }
}

function hideall() {
    for (let onePage of allPages) {
        onePage.style.display = "none";
    }
}

function removeActiveNav() {
    for (let oneButton of allNavButtons) {
        oneButton.classList.remove("active");
    }
}

function showPage(pageName, pageNumber, navButton) {
    hideall();
    removeActiveNav();

    const selectedPage = document.querySelector("#" + pageName);
    selectedPage.style.display = "block";
    selectedPage.classList.add("page-enter");
    navButton.classList.add("active");
    currentPage = pageNumber;

    mainNav.classList.remove("menuShow");
    menuLabel.innerHTML = "☰ Menu";
    playSound(clickAudio);
}

homeNav.addEventListener("click", function () {
    showPage("home", 1, homeNav);
});

benefitsNav.addEventListener("click", function () {
    showPage("benefits", 2, benefitsNav);
});

regulationsNav.addEventListener("click", function () {
    showPage("regulations", 3, regulationsNav);
});

quizNav.addEventListener("click", function () {
    showPage("quiz", 4, quizNav);
});

gameNav.addEventListener("click", function () {
    showPage("game", 5, gameNav);
});

homeButton.addEventListener("click", function () {
    showPage("home", 1, homeNav);
});

benefitsStart.addEventListener("click", function () {
    showPage("benefits", 2, benefitsNav);
});

gameStart.addEventListener("click", function () {
    showPage("game", 5, gameNav);
});

menuButton.addEventListener("click", function () {
    mainNav.classList.toggle("menuShow");

    if (mainNav.classList.contains("menuShow")) {
        menuLabel.innerHTML = "✕ Close";
    } else {
        menuLabel.innerHTML = "☰ Menu";
    }
});

soundButton.addEventListener("click", function () {
    if (soundOn == true) {
        soundOn = false;
        soundButton.innerHTML = "Sound: Off";
        soundButton.classList.add("muted");
    } else {
        soundOn = true;
        soundButton.innerHTML = "Sound: On";
        soundButton.classList.remove("muted");
        playSound(clickAudio);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowRight") {
        if (currentPage == 1) {
            showPage("benefits", 2, benefitsNav);
        } else if (currentPage == 2) {
            showPage("regulations", 3, regulationsNav);
        } else if (currentPage == 3) {
            showPage("quiz", 4, quizNav);
        } else if (currentPage == 4) {
            showPage("game", 5, gameNav);
        } else {
            showPage("home", 1, homeNav);
        }
    }

    if (event.code == "ArrowLeft") {
        if (currentPage == 1) {
            showPage("game", 5, gameNav);
        } else if (currentPage == 2) {
            showPage("home", 1, homeNav);
        } else if (currentPage == 3) {
            showPage("benefits", 2, benefitsNav);
        } else if (currentPage == 4) {
            showPage("regulations", 3, regulationsNav);
        } else {
            showPage("quiz", 4, quizNav);
        }
    }
});

// -------------------- BENEFIT EXPLORER --------------------
const benefit1 = document.querySelector("#benefit1");
const benefit2 = document.querySelector("#benefit2");
const benefit3 = document.querySelector("#benefit3");
const benefit4 = document.querySelector("#benefit4");
const allBenefitCards = document.querySelectorAll(".ingredient-card");
const benefitDetail = document.querySelector("#benefitDetail");
const benefitName = document.querySelector("#benefitName");
const benefitText = document.querySelector("#benefitText");
const benefitNoteTitle = document.querySelector("#benefitNoteTitle");
const benefitNoteText = document.querySelector("#benefitNoteText");
const detailCan = document.querySelector("#detailCan");

const benefitTitleArray = [
    "Protection: a strong seal",
    "Portability: light and stackable",
    "Convenience: ready to serve",
    "Recyclability: useful metal"
];

const benefitTextArray = [
    "The sealed aluminium package blocks light and limits contact with air. It helps protect the drink during storage and transport.",
    "Cans are light, compact and easy to stack. These features make soft drinks easier to carry, store and transport in large numbers.",
    "A sealed single container is easy to store and open. Metal also transfers heat quickly, so a can can be chilled efficiently.",
    "Used aluminium cans can be collected, sorted and processed into material for new products instead of being treated as ordinary waste."
];

const benefitNoteTitleArray = [
    "Why it matters",
    "Transport benefit",
    "Everyday benefit",
    "The condition matters"
];

const benefitNoteTextArray = [
    "A tough package reduces leaks and damage before the drink reaches the user.",
    "Regular shapes use shelf and delivery space efficiently.",
    "The package makes serving simple at shops, events and homes.",
    "An empty and correctly returned can is easier to recover for recycling."
];

const benefitSpriteArray = [
    "can-sprite sprite-water detail-can",
    "can-sprite sprite-fizz detail-can",
    "can-sprite sprite-flavour detail-can",
    "can-sprite sprite-recycle detail-can"
];

function showBenefit(benefitNumber, selectedButton) {
    for (let oneCard of allBenefitCards) {
        oneCard.classList.remove("selected");
    }

    selectedButton.classList.add("selected");
    benefitName.innerHTML = benefitTitleArray[benefitNumber];
    benefitText.innerHTML = benefitTextArray[benefitNumber];
    benefitNoteTitle.innerHTML = benefitNoteTitleArray[benefitNumber];
    benefitNoteText.innerHTML = benefitNoteTextArray[benefitNumber];
    detailCan.className = benefitSpriteArray[benefitNumber];

    benefitDetail.classList.remove("flash");
    setTimeout(function () {
        benefitDetail.classList.add("flash");
    }, 20);

    playSound(clickAudio);
}

benefit1.addEventListener("click", function () {
    showBenefit(0, benefit1);
});

benefit2.addEventListener("click", function () {
    showBenefit(1, benefit2);
});

benefit3.addEventListener("click", function () {
    showBenefit(2, benefit3);
});

benefit4.addEventListener("click", function () {
    showBenefit(3, benefit4);
});

// -------------------- SINGAPORE REGULATIONS --------------------
const rule1 = document.querySelector("#rule1");
const rule2 = document.querySelector("#rule2");
const rule3 = document.querySelector("#rule3");
const rule4 = document.querySelector("#rule4");
const allRuleButtons = document.querySelectorAll(".journey-step");
const regulationKicker = document.querySelector("#regulationKicker");
const regulationTitle = document.querySelector("#regulationTitle");
const regulationText = document.querySelector("#regulationText");
const regulationTip = document.querySelector("#regulationTip");

const regulationKickerArray = [
    "Rule 1 - Nutrition information",
    "Rule 2 - Prepacked food label",
    "Rule 3 - Advertising",
    "Rule 4 - Beverage Container Return Scheme"
];

const regulationTitleArray = [
    "Nutri-Grade A to D",
    "Important details must be shown",
    "Grade D advertising is restricted",
    "A 10-cent refundable deposit"
];

const regulationTextArray = [
    "Prepacked soft drinks are graded A, B, C or D according to their sugar and saturated-fat content. Grade C and D drinks must show the Nutri-Grade mark on the front of the package.",
    "A prepacked drink label must give an accurate English product name, a complete ingredient list, allergens and net quantity. Imported products also identify the local importer and country of origin.",
    "Advertisements promoting Nutri-Grade D beverages are generally prohibited across media. Limited point-of-sale exceptions apply to prepacked drinks in variety shops such as supermarkets.",
    "Eligible metal and plastic drink containers from 150 millilitres to 3 litres carry a Deposit Mark. Return the empty, uncrushed container with a readable barcode at a Return Right machine to claim the refund."
];

const regulationTipArray = [
    "<strong>Remember:</strong> Showing the mark is optional for Grade A and B drinks.",
    "<strong>Read carefully:</strong> Ingredients are listed in descending order by weight.",
    "<strong>Purpose:</strong> The restriction reduces the influence of advertising on drink choices.",
    "<strong>July 2026:</strong> The transition period runs until 30 September 2026; check for the Deposit Mark."
];

function showRegulation(ruleNumber, selectedButton) {
    for (let oneButton of allRuleButtons) {
        oneButton.classList.remove("active");
    }

    selectedButton.classList.add("active");
    regulationKicker.innerHTML = regulationKickerArray[ruleNumber];
    regulationTitle.innerHTML = regulationTitleArray[ruleNumber];
    regulationText.innerHTML = regulationTextArray[ruleNumber];
    regulationTip.innerHTML = regulationTipArray[ruleNumber];
    playSound(clickAudio);
}

rule1.addEventListener("click", function () {
    showRegulation(0, rule1);
});

rule2.addEventListener("click", function () {
    showRegulation(1, rule2);
});

rule3.addEventListener("click", function () {
    showRegulation(2, rule3);
});

rule4.addEventListener("click", function () {
    showRegulation(3, rule4);
});

// -------------------- BASIC KNOWLEDGE QUIZ --------------------
const quizSubmitButton = document.querySelector("#quizSubmitButton");
const quizResetButton = document.querySelector("#quizResetButton");
const quizResult = document.querySelector("#quizResult");
const q1a = document.querySelector("#q1a");
const q2a = document.querySelector("#q2a");
const q3a = document.querySelector("#q3a");
const q4a = document.querySelector("#q4a");
const q5a = document.querySelector("#q5a");

quizSubmitButton.addEventListener("click", CheckQuiz);

function CheckQuiz() {
    var quizScore = 0;
    var q1 = document.querySelector("input[name='q1']:checked").value;
    var q2 = document.querySelector("input[name='q2']:checked").value;
    var q3 = document.querySelector("input[name='q3']:checked").value;
    var q4 = document.querySelector("input[name='q4']:checked").value;
    var q5 = document.querySelector("input[name='q5']:checked").value;

    if (q1 == "Protection") {
        quizScore++;
    }

    if (q2 == "Aluminium") {
        quizScore++;
    }

    if (q3 == "Sugar and saturated fat") {
        quizScore++;
    }

    if (q4 == "Grade D") {
        quizScore++;
    }

    if (q5 == "Deposit Mark") {
        quizScore++;
    }

    quizResult.innerHTML = "You scored " + quizScore + " out of 5.";

    if (quizScore == 5) {
        quizResult.innerHTML += " Excellent!";
        playSound(correctAudio);
    } else {
        quizResult.innerHTML += " Review the learning pages and try again.";
        playSound(clickAudio);
    }
}

quizResetButton.addEventListener("click", ResetQuiz);

function ResetQuiz() {
    q1a.checked = true;
    q2a.checked = true;
    q3a.checked = true;
    q4a.checked = true;
    q5a.checked = true;
    quizResult.innerHTML = "Your score will appear here.";
    playSound(clickAudio);
}

function GetRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// -------------------- RETURN RIGHT MINI-GAME --------------------
const miniSetup = document.querySelector("#miniSetup");
const miniStartButton = document.querySelector("#miniStartButton");
const miniGameArea = document.querySelector("#miniGameArea");
const miniTime = document.querySelector("#miniTime");
const miniScore = document.querySelector("#miniScore");
const miniCaught = document.querySelector("#miniCaught");
const catchCan = document.querySelector("#catchCan");
const miniFeedback = document.querySelector("#miniFeedback");
const miniResult = document.querySelector("#miniResult");
const miniResultTitle = document.querySelector("#miniResultTitle");
const miniResultText = document.querySelector("#miniResultText");
const miniRestartButton = document.querySelector("#miniRestartButton");
const miniResetButton = document.querySelector("#miniResetButton");

var miniGameActive = false;
var miniCanReturnable = true;
var miniTimeLeft = 20;
var miniGameScore = 0;
var miniCorrectCans = 0;
var miniMoveIntervalId;
var miniTimerIntervalId;

function MoveMiniCan() {
    var newLeft = GetRandom(0, 200);
    var newTop = GetRandom(0, 200);
    var canType = GetRandom(0, 1);

    catchCan.style.left = newLeft + "px";
    catchCan.style.top = newTop + "px";

    if (canType == 1) {
        miniCanReturnable = true;
        catchCan.className = "catch-can deposit-can";
        catchCan.innerHTML = "Deposit Mark";
    } else {
        miniCanReturnable = false;
        catchCan.className = "catch-can no-deposit-can";
        catchCan.innerHTML = "No Deposit";
    }
}

function FinishMiniGame() {
    clearInterval(miniMoveIntervalId);
    clearInterval(miniTimerIntervalId);
    miniGameActive = false;
    miniGameArea.style.display = "none";
    miniResult.style.display = "block";

    if (miniCorrectCans >= 10) {
        miniResultTitle.innerHTML = "Excellent return run!";
    } else if (miniCorrectCans >= 5) {
        miniResultTitle.innerHTML = "Good return run!";
    } else {
        miniResultTitle.innerHTML = "Keep checking the mark!";
    }

    miniResultText.innerHTML = "You collected " + miniCorrectCans +
        " eligible cans and finished with " + miniGameScore + " points.";
}

function StartMiniGame() {
    clearInterval(miniMoveIntervalId);
    clearInterval(miniTimerIntervalId);
    miniGameActive = true;
    miniTimeLeft = 20;
    miniGameScore = 0;
    miniCorrectCans = 0;

    miniSetup.style.display = "none";
    miniResult.style.display = "none";
    miniGameArea.style.display = "block";
    miniTime.innerHTML = miniTimeLeft;
    miniScore.innerHTML = miniGameScore;
    miniCaught.innerHTML = miniCorrectCans;
    miniFeedback.innerHTML = "Click only cans with the Deposit Mark.";

    MoveMiniCan();
    miniMoveIntervalId = setInterval(MoveMiniCan, 1000);
    miniTimerIntervalId = setInterval(function () {
        miniTimeLeft--;
        miniTime.innerHTML = miniTimeLeft;

        if (miniTimeLeft <= 0) {
            FinishMiniGame();
        }
    }, 1000);

    playSound(clickAudio);
}

catchCan.addEventListener("click", function () {
    if (miniGameActive == true) {
        if (miniCanReturnable == true) {
            miniGameScore++;
            miniCorrectCans++;
            miniFeedback.innerHTML = "Correct! That can carries the Deposit Mark.";
            playSound(correctAudio);
        } else {
            if (miniGameScore > 0) {
                miniGameScore--;
            }
            miniFeedback.innerHTML = "Wrong can. Look for the Deposit Mark.";
            playSound(wrongAudio);
        }

        miniScore.innerHTML = miniGameScore;
        miniCaught.innerHTML = miniCorrectCans;
        MoveMiniCan();
    }
});

function ResetMiniGame() {
    clearInterval(miniMoveIntervalId);
    clearInterval(miniTimerIntervalId);
    miniGameActive = false;
    miniTimeLeft = 20;
    miniGameScore = 0;
    miniCorrectCans = 0;

    miniSetup.style.display = "block";
    miniGameArea.style.display = "none";
    miniResult.style.display = "none";
    miniTime.innerHTML = "20";
    miniScore.innerHTML = "0";
    miniCaught.innerHTML = "0";
    catchCan.style.left = "0px";
    catchCan.style.top = "0px";
    catchCan.className = "catch-can deposit-can";
    catchCan.innerHTML = "Deposit Mark";
    miniFeedback.innerHTML = "Click only cans with the Deposit Mark.";
    playSound(clickAudio);
}

miniStartButton.addEventListener("click", StartMiniGame);
miniRestartButton.addEventListener("click", ResetMiniGame);
miniResetButton.addEventListener("click", ResetMiniGame);

// Show only the home page when the app first loads.
hideall();
document.querySelector("#home").style.display = "block";
miniGameArea.style.display = "none";
miniResult.style.display = "none";
