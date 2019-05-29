const card = document.querySelector('.deck');

// when the card is clicked check the target and call the openCard() function on that target
card.addEventListener('click', function (event) {
    const target = event.target;
    if (target.nodeName === 'LI') {
        openCard(target);
        pushArray(target);
    }
});

// open the card that was clicked - add or remove classes
function openCard(event) {
    if (event.classList.contains('open', 'show') === false) {
        event.classList.add('open', 'show');
    } else {
        event.classList.remove('open', 'show');
    }
}

