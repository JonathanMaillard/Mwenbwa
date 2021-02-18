// const modals = [...document.querySelectorAll(".modal")];

// function hideModal() {
//     modals.forEach(modal => {
//         modal.classList.remove("show-modal");
//     });
// }

function hideGamelogModal() {
    document.querySelector(".gamelog").classList.remove("show-modal");
}
function hideLeaderboardModal() {
    document.querySelector(".leaderboard").classList.remove("show-modal");
}
function hideRulesModal() {
    document.querySelector(".rules").classList.remove("show-modal");
}
function hideDisconnectModal() {
    document.querySelector(".disconnect").classList.remove("show-modal");
}

export {hideGamelogModal};
export {hideLeaderboardModal};
export {hideRulesModal};
export default {hideDisconnectModal};
