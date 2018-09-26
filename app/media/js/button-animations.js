import anime from 'animejs';

const ANIMATION_ID_KEY = 'data-animation-id';

// sets up mouse enter/leave, focus/blur and touch handlers for button animations
function buttonAnimations () {
    const buttons = document.querySelectorAll('button,footer a');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.setAttribute(ANIMATION_ID_KEY, `${i}-button`);
        // transform
        button.addEventListener('touchstart', buttonAnimation, false);
        button.addEventListener('mouseenter', buttonAnimation, false);
        button.addEventListener('focus', buttonAnimation, false);
        // reset
        button.addEventListener('mouseleave', resetButtonAnimation, false);
        button.addEventListener('touchend', resetButtonAnimation, false);
        button.addEventListener('blur', resetButtonAnimation, false);
    }
}

let outAnimationMap = {};
let inAnimationMap = {};

function buttonAnimation (event) {
    const { target } = event;
    const animationId = target.getAttribute(ANIMATION_ID_KEY);
    const outAnimation = outAnimationMap[animationId];
    const targetBorderRadius = target.style.borderRadius;

    if (outAnimation) outAnimation.pause();

    inAnimationMap[animationId] = anime({
        targets: target,
        scale: 1.10,
        duration: 700,
        borderRadius: [targetBorderRadius, '25px'],
    });
}

function resetButtonAnimation (event) {
    const { target } = event;
    const activeElement = document.activeElement;
    const activeAnimationId = activeElement.getAttribute(ANIMATION_ID_KEY);
    const animationId = target.getAttribute(ANIMATION_ID_KEY);
    const inAnimation = inAnimationMap[animationId];

    if (inAnimation) inAnimation.pause();

    // if button is active it's focused we do not want to reset the
    // animation values if we hover in an out of a focused button
    if (animationId !== activeAnimationId) {
      outAnimationMap[animationId] = anime({
          targets: target,
          scale: 1,
          duration: 700,
          borderRadius: ['25px', '0'],
      });
    }
}

module.exports = buttonAnimations;
