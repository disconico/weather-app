const slider = (() => {
  // slider display
  let blockIndex = 1;

  function showBlock(n) {
    const nInt = parseInt(n, 10);
    let i;
    const myBlocks = document.getElementsByClassName('hours-grp');
    const dots = document.getElementsByClassName('dot');
    if (nInt > myBlocks.length) {
      blockIndex = 1;
    }
    if (nInt < 1) {
      blockIndex = myBlocks.length;
      console.log(blockIndex);
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
    const nInt = parseInt(n, 10);
    showBlock((blockIndex += nInt));
  }

  function currentBlock(n) {
    const nInt = parseInt(n, 10);
    showBlock((blockIndex = nInt));
  }

  return { showBlock, plusBlock, currentBlock };
})();

export default slider;
