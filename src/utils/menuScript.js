import { gsap } from 'gsap';

const executeMenuScript = () => {
  const menuToggle = document.getElementById("menuToggle");
  if (!menuToggle) return;

  const menuBar = gsap.timeline({ reversed: true })
    .to('.bar-1', { attr: { d: "M8,2 L2,8" }, x: 1, ease: "power2.inOut" }, 'start')
    .to('.bar-2', { autoAlpha: 0 }, 'start')
    .to('.bar-3', { attr: { d: "M8,8 L2,2" }, x: 1, ease: "power2.inOut" }, 'start')
    .reverse();

  const tl = gsap.timeline({ paused: true })
    .to('.fullpage-menu', { duration: 0, display: "block", ease: 'expo.inOut' })
    .from('.menu-bg span', { duration: 1, x: "100%", stagger: 0.1, ease: 'expo.inOut' })
    .from('.main-menu li a', { duration: 1.5, y: "100%", stagger: 0.2, ease: 'expo.inOut' }, "-=0.5")
    .from('.social-links li', { duration: 1, y: "-100%", opacity: 0, stagger: 0.1, ease: 'expo.inOut' }, "-=0.5")
    .reverse();

  menuToggle.addEventListener('click', () => {
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  });
};

export default executeMenuScript;
