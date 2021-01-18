{ // SECTIONS EVENTS
  const sections = document.querySelectorAll('body > section');

  let nowIndex = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    activeIndex();
    activeCont();
    activeBg();
    if(scrollY < 100){
      scrollViewOn()
    } else {
      scrollViewOff()
    }
  })


  function activeIndex(){
    const scrollY = window.scrollY;
    sections.forEach((elem, index) => {
      const top = elem.getBoundingClientRect().top + scrollY;
      const bottom = elem.getBoundingClientRect().bottom + scrollY;
      if(scrollY > top && scrollY <= bottom){
        nowIndex = index;
      }
    })
  }

  function activeCont(){
    sections.forEach((elem, index) => {
      const content = elem.querySelector('section');
      if(index !== nowIndex){
        content.style.zIndex = -1;
        content.style.opacity = 0;
      } else if (index == nowIndex){
        const nowSection = nowPercent()*3;

        content.style.zIndex = 2;
        if(nowSection < 1){
          content.style.opacity = nowSection;
        } else if (1 < nowSection && nowSection <= 2){
          content.style.opacity = 1;
        } else if (2 < nowSection && nowSection <= 3){
          content.style.opacity = (3 - nowSection);
        }
      }
    })
  }

  function activeBg(){
    sections.forEach((elem, index) => {
      const bg = elem.querySelectorAll('.background');
      if (nowIndex == 0 && index == nowIndex){
        bg[0].style.zIndex = 1;

        const nowSection = nowPercent()*3;
        if(nowSection < 1){
          bg[0].style.opacity = nowSection;
        } else if (1 < nowSection && nowSection <= 2){
          bg[0].style.opacity = 1;
        } else if (2 < nowSection && nowSection <= 3){
          bg[0].style.opacity = (3 - nowSection);
        }

        bg[0].style.left = bg[0].clientWidth * (nowPercent() - 0.5) + 'px';
      } else if (nowIndex == 1 && index == nowIndex){
        bg.forEach((bgElem, bgIndex) => {
          bgElem.style.zIndex = 1;

          const nowSection = nowPercent()*3;
          if(nowSection < 1){
            bgElem.style.opacity = nowSection;
          } else if (1 < nowSection && nowSection <= 2){
            bgElem.style.opacity = 1;
          } else if (2 < nowSection && nowSection <= 3){
            bgElem.style.opacity = (3 - nowSection);
          }

          if(bgIndex == 0){
            bgElem.style.top = (bgElem.clientHeight*1.5) * (nowPercent()-0.7) + 'px';
          }
          if(bgIndex == 1){
            bgElem.style.left = (bgElem.clientWidth/3) * (nowPercent() - 1) + 'px';
          }
        })
      } else {
        bg.forEach((elem) => {
          elem.style.opacity = 0;
          elem.style.zIndex = -1;
        })
      }
    })
  }

  function nowPercent(){
    const top = sections[nowIndex].getBoundingClientRect().top;
    const height = sections[nowIndex].getBoundingClientRect().height;
    const nowPercent = (1 - ((Math.floor(((height+top)/height)*1000))/1000));
    return nowPercent;
  }


  // Scroll Down View ON & OFF
  const scrollView = document.querySelector('#scroll');
  function scrollViewOff(){
    scrollView.classList.add('off');
  }

  function scrollViewOn(){
    scrollView.classList.remove('off');
  }
}