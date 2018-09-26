import scrollToElement from './scroll-to-element';

// sets up click handlers and consumes scrollToElement on click
function scrollHandler(selector) {
    let elements = document.querySelectorAll(selector);
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener('touchstart', scrollEvent, false);
        element.addEventListener('click', scrollEvent, false);
    }
}

function scrollEvent() {
    let menuType = this.dataset.section;
    let container = document.querySelector(`#${ menuType }-container`);

    scrollToElement(container);
}

module.exports = scrollHandler;
