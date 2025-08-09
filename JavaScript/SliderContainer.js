document.querySelectorAll('.A1').forEach(a1Section => {
  // Adjust selectors relative to this .A1 block
  const sliderFrame = a1Section.querySelector('.s1');
  const slidesTrack = a1Section.querySelector('.s2');
  const progressTrack = a1Section.querySelector('.button-new');
  const progressFill = a1Section.querySelector('.inside-button');
  if (!sliderFrame || !slidesTrack || !progressTrack || !progressFill) return;
  const singleSlideWidth = slidesTrack.children[0].offsetWidth;

  const arrowLeft = document.createElement('button');
  const arrowRight = document.createElement('button');
  arrowLeft.innerHTML = '&#10094;';
  arrowRight.innerHTML = '&#10095;';

  const baseArrowStyle = {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '3px',
    width: '50px',
    height: '100px',
    fontSize: '32px',
    cursor: 'pointer',
    zIndex: '10',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease'
  };
  Object.assign(arrowLeft.style, baseArrowStyle, { left: '15px' });
  Object.assign(arrowRight.style, baseArrowStyle, { right: '15px' });

  sliderFrame.appendChild(arrowLeft);
  sliderFrame.appendChild(arrowRight);

  let currentIndex = 0;
  const totalSlides = slidesTrack.children.length;

  function updateArrowVisibility() {
    arrowLeft.style.opacity = (currentIndex === 0) ? '0.2' : '1';
    arrowRight.style.opacity = (currentIndex === totalSlides - 1) ? '0.2' : '1';
  }

  function updateProgressBar() {
    const trackWidth = progressTrack.offsetWidth;
    const fillWidth = progressFill.offsetWidth;
    const maxLeft = trackWidth - fillWidth;
    let leftPx = 0;
    if (totalSlides > 1) {
      leftPx = (maxLeft) * (currentIndex / (totalSlides - 1));
    }
    progressFill.style.left = leftPx + "px";
  }

  function slideNext() {
    if (currentIndex >= totalSlides - 1) return;
    currentIndex++;
    slidesTrack.style.transition = 'transform 0.5s ease';
    slidesTrack.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
    updateArrowVisibility();
    updateProgressBar();
  }
  function slidePrev() {
    if (currentIndex <= 0) return;
    currentIndex--;
    slidesTrack.style.transition = 'transform 0.5s ease';
    slidesTrack.style.transform = `translateX(-${singleSlideWidth * currentIndex}px)`;
    updateArrowVisibility();
    updateProgressBar();
  }

  // Show/hide arrows and progress bar on mouse events
  function showControls() {
    arrowLeft.style.display = 'block';
    arrowRight.style.display = 'block';
    progressFill.style.display = 'block';
  }
  function hideControls() {
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';
    progressFill.style.display = 'none';
  }

  sliderFrame.addEventListener('mouseenter', showControls);
  sliderFrame.addEventListener('mouseleave', hideControls);

  arrowRight.addEventListener('click', slideNext);
  arrowLeft.addEventListener('click', slidePrev);

  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'none';
  progressFill.style.display = 'none';

  updateArrowVisibility();
  setTimeout(updateProgressBar, 80);
  window.addEventListener('resize', updateProgressBar);
});
