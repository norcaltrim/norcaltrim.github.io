import anime from 'animejs';

function flowerAnimations () {
    const plantSvg = document.querySelector('#plant svg');
    const plantPath = document.querySelector('#plant path');
    console.log('plantPath', plantPath)

    anime({
        targets: plantSvg,
        duration: 15000,
        easing: 'easeInOutBack',
        loop: true,
        fill: [
          '#4F6242',
          '#9B6679',
          '#87AB7B'
        ],
    });
}

module.exports = flowerAnimations;
