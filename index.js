let homeScoreOne = document.getElementById("homescorebtn1")
let homeScoreTwo = document.getElementById("homescorebtn2")
let homeScoreThree = document.getElementById("homescorebtn2")

let guestScoreOne = document.getElementById("guestscorebtn1")
let guestScoreTwo = document.getElementById("guestscorebtn2")
let guestScoreThree = document.getElementById("guestscorebtn3")

let homeScoreEl = document.getElementById("homescore")
let guestScoreEl = document.getElementById(" guestscore")

let homeScore = 0
let guestScore = 0

let newGame = document.getElementById("reset")

function resetGame() {
    guestScore = 0
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function plusOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function plusOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function plusTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}