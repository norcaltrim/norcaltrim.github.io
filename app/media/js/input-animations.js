import anime from 'animejs';

const ANIMATION_ID_KEY = 'data-animation-id';

// sets up focus enter/leave handlers for input animations
function inputAnimations () {
    const inputs = document.querySelectorAll('input,textarea');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.setAttribute(ANIMATION_ID_KEY, `${i}-input`);
        // transform
        input.addEventListener('focus', inputAnimation, false);
        // reset
        input.addEventListener('blur', resetButtonAnimation, false);
    }
}

let outAnimationMap = {};
let inAnimationMap = {};

function inputAnimation (event) {
    const { target } = event;
    const animationId = target.getAttribute(ANIMATION_ID_KEY);
    const outAnimation = outAnimationMap[animationId];

    if (outAnimation) outAnimation.pause();

    inAnimationMap[animationId] = anime({
        targets: target,
        scale: 1.05,
        duration: 700,
        borderRadius: ['0', '25px'],
    });
}

function resetButtonAnimation (event) {
    const { target } = event;
    const animationId = target.getAttribute(ANIMATION_ID_KEY);
    const inAnimation = inAnimationMap[animationId];

    if (inAnimation) inAnimation.pause();

    outAnimationMap[animationId] = anime({
        targets: target,
        scale: 1,
        duration: 700,
        borderRadius: ['25px', '0'],
    });
}

module.exports = inputAnimations;
