{
  const hNav = document.querySelectorAll('#header .header ul');
  const hNavBtn = document.querySelector('#header .header .bar');

  hNavBtn.addEventListener('click', () => {
    hNav.forEach((elem) => {
      elem.classList.toggle('active');
    })
  })
}
