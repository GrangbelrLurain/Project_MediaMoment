
{
  const banner = document.querySelector('#banner');
  const time = 3000; // ms

  let bannerState = 0;
  
  setInterval(() => {
    if(bannerState >= 2){
      bannerState = 0;
    } else {
      bannerState++
    }
    bannerChange();
  }, time)

  function bannerChange (){
    banner.style.backgroundImage = `url(assets/img/banner_${bannerState}.jpg)`
    banner.style.transition = `all ${time-1000}ms`
  }

  bannerChange();
}

{ //CONTENTS EVENT
  const contents = document.querySelectorAll('#contents .contents article');
  const contentsList = document.querySelectorAll('#contents .contents .list li');
  let nowContents = 0;
  
  contentsList.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      contentsUpdate(index);
      contentsListActive(index);
      contentsMove()
    })
  })

  function contentsUpdate (index){
    nowContents = index
  }

  function contentsListActive (index){
    contentsList.forEach((elem, everyIndex) => {
      if(index == everyIndex){
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    })
  }

  function contentsMove (){
    contents.forEach((elem, index) => {
      if(index == nowContents){
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    })
  }
}