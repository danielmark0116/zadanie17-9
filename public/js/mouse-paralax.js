document.querySelector('body').addEventListener('mousemove', e => {
  const roundValue = 0.08;
  let xOffset = (e.screenX * roundValue).toFixed(0) * -0.05;
  let yOffset = (e.screenY * roundValue).toFixed(0) * -0.05;

  // currently not in use. to use, uncomment the code below and add 'paralax' class to any DOM element you want to 'animate' on mousemove

  // document.querySelector('.paralax').style.transform = `translateX(${0 +
  //   xOffset}px) translateY(${0 + yOffset}px)`;
});
