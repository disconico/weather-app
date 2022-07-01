const slider = (() => {
  // slider display
  let blockIndex = 1;

  function showBlock(n) {
    let i;
    const myBlocks = document.getElementsByClassName('hours-grp');
    const dots = document.getElementsByClassName('dot');
    if (n > myBlocks.length) {
      blockIndex = 1;
    }
    if (n < 1) {
      blockIndex = myBlocks.length;
    }
    for (i = 0; i < myBlocks.length; i += 1) {
      myBlocks[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    myBlocks[blockIndex - 1].style.display = 'flex';
    dots[blockIndex - 1].className += ' active';
  }

  function plusBlock(n) {
    showBlock((blockIndex += n));
  }

  function currentBlock(n) {
    showBlock((blockIndex = n));
  }

  return { showBlock, plusBlock, currentBlock };
})();

export default slider;
