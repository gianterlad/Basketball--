let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseHomeScoreOne() { 
    homeScore += 1
    homeScoreEl.innerText = homeScore
}
function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function increaseGuestScoreOne() { 
    guestScore += 1
    guestScoreEl.innerText = guestScore
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}