document.addEventListener('DOMContentLoaded', (event) => {
    const scoresListDiv = document.getElementById('scores-list');
    const scores = JSON.parse(localStorage.getItem('scores')) || {};

    let resultsHTML = '<ul>';
    for (let matricNumber in scores) {
        resultsHTML += `<li>${matricNumber}: ${scores[matricNumber]}</li>`;
    }
    resultsHTML += '</ul>';

    scoresListDiv.innerHTML = resultsHTML;
});
