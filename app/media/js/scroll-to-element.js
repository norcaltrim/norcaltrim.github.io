import anime from 'animejs';

const scrollElement = document.scrollingElement || document.documentElement;

function scrollToElement (element) {
    // get padding-top of content wrapper it's accounting for the fixed header
    const scrollContainer = document.querySelectorAll('.content')[0];
    let containerPadding = window.getComputedStyle(scrollContainer).getPropertyValue('padding-top');
    containerPadding = parseInt(containerPadding, 10);

    const scrollValue = element.offsetTop - containerPadding;

    anime({
        targets: scrollElement,
        scrollTop: scrollValue,
        easing: 'easeOutExpo',
        duration: 500,
    });
}

module.exports = scrollToElement;
