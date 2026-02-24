const milkButton = document.querySelector('button');

const tl = gsap.timeline({ paused: true });

tl.to('.milk', {
  y: '-=125vh',
  duration: 5,
})
  .to(
    '.milk-wave',
    {
      xPercent: -50,
      duration: 2.5,
      ease: 'none',
    },
    '<',
  )
  .set('.milk-wave', {
    xPercent: 0,
  })
  .to('.milk-wave', {
    xPercent: -50,
    duration: 2.5,
    ease: 'none',
  });

const playSounds = () => {
  const moo = new Audio('audio/cow-moo.mp3');
  moo.play();

  const pour = new Audio('audio/pour.mp3');
  pour.play();
};

const cowHandle = () => {
  playSounds();
  tl.restart();
};

milkButton.addEventListener('click', cowHandle);
