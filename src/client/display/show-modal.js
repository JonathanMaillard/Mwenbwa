// const modals = [...document.querySelectorAll(".modal")];

// function showModal() {
//     modals.forEach(modal => {
//         modal.classList.add("show-modal");
//     });
// }

function showGamelogModal() {
    document.querySelector(".gamelog").classList.add("show-modal");
}
function showLeaderboardModal() {
    document.querySelector(".leaderboard").classList.add("show-modal");
}
function showRulesModal() {
    document.querySelector(".rules").classList.add("show-modal");
}
function showDisconnectModal() {
    document.querySelector(".disconnect").classList.add("show-modal");
}

export {showGamelogModal};
export {showLeaderboardModal};
export {showRulesModal};
export {showDisconnectModal};
