
"use strict";

function play(cards, index) {
    const visibleCards = cards.filter(card => card.visible);
    if (visibleCards.length == 0) {
        cards[index].visible = true;
        return;
    }
    let selectedCard  = cards[index];
    if (visibleCards[0].value == selectedCard.value) {
        visibleCards[0].found = true;
        selectedCard.found = true;
    }        
    visibleCards[0].visible = false;
}

const cards = [
    { value: 'A', visible: false, found: false },
    { value: 'A', visible: false, found: false },
    { value: 'B', visible: false, found: false },
    { value: 'B', visible: false, found: false },
    { value: 'C', visible: false, found: false },
    { value: 'C', visible: false, found: false },
];


