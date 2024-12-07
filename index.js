function getMessage(value) {
    console.log(value)

    if( value < 0) {
        return "Invalid number"
    }
    if (value === 0) {
        return "You don't have any items in your shopping list"
    }
    if (value === 1) {
        return "You have 1 item in your shopping list"
    }
    if (value > 1) {
        return "You have more than 1 item in your shopping list"
    }
}

let itemsCount = document.querySelector ('#items-count');

function renderMessage() {
    let value = Number.parseInt(itemsCount.value, 10)
    let message = getMessage(value)
    document.querySelector('#message').textContent = message
}

document.querySelector('#add-item').addEventListener('click', function() {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
    renderMessage();
});

document.querySelector('#sub-item').addEventListener('click', function() {
    itemsCount.Value = Number.parseInt(itemsCount.value, 10) - 1;
    renderMessage();
})

// The first time the page loads, render the initial message
if (typeof getMessage !== 'undefined') {
    renderMessage();
}