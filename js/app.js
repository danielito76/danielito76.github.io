document.addEventListener('DOMContentLoaded', () => {


  // function openCloseBurgerMenu() {
  //   var x = document.getElementById('myLinks')
  //   if (x.style.display === 'block') {
  //     x.style.display = 'none'
  //   } else {
  //     x.style.display = 'block'
  //   }
  // }





  function goToNextAnchor() {
    const hash = window.location.hash.substr(1)
    if (hash === '') {
      location.hash = '#about'
      // console.log('ok')
    } if (hash === 'about') {
      location.hash = '#experience'
      // console.log('ok')
    } if (hash === 'experience') {
      location.hash = '#skills'
      // console.log('ok')
    } if (hash === 'skills') {
      location.hash = '#projects'
      // console.log('ok')
    } if (hash === 'projects') {
      location.hash = '#contact'
      // console.log('ok')
    }
  }

  function goToPrevAnchor() {
    const hash = window.location.hash.substr(1)
    if (hash === 'contact') {
      location.hash = '#projects'
      // console.log('ok')
    } if (hash === 'projects') {
      location.hash = '#skills'
      // console.log('ok')
    } if (hash === 'skills') {
      location.hash = '#experience'
      // console.log('ok')
    } if (hash === 'experience') {
      location.hash = '#about'
      // console.log('ok')
    } if (hash === 'about') {
      location.hash = ''
      // console.log('ok')
    }
  }













  document.getElementById('next_entry').addEventListener('click', goToNextAnchor)
  document.getElementById('prev_entry').addEventListener('click', goToPrevAnchor)
  // document.getElementById('burgerMenu').addEventListener('click', openCloseBurgerMenu)























})
