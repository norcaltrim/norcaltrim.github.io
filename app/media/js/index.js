import scrollHandler from './scroll-handler';
import buttonAnimations from './button-animations';
import flowerAnimations from './flower-animations';
import inputAnimations from './input-animations';
import safariRequiredShim from './safari-required-shim';

safariRequiredShim();
scrollHandler('[js-click=header-nav-item]');
buttonAnimations();
inputAnimations();
flowerAnimations();
