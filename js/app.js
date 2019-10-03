document.addEventListener('DOMContentLoaded', () => {



//   $('.js-scroll-to').click(function(e) {
//
// 	target = $($(this).attr('href'))
//
//     if (target.offset()) {
//       $('html, body').animate({scrollTop: target.offset().top + 'px'}, 600)
//     }
//
//     e.preventDefault()
//   })
//
//
//
//   $('.js-next').click(function(e) {
//
//     var selected = $('.js-list-item.js-current-panel')
//     var anchors = $('.js-list-item')
//
//     var pos = anchors.index(selected)
//     var next = anchors.get(pos+1)
//     var prev = anchors.get(pos-1)
//
//     target = $(next)
//
//     $(selected).removeClass('js-current-panel')
//     $(next).addClass('js-current-panel')
//
//     if (target.offset()) {
//       $('html, body').animate({scrollTop: target.offset().top + 'px'}, 600)
//     }
//
//
//     e.preventDefault()
//   })
//
//
//
//
//
//
//
//   $('.js-prev').click(function(e) {
//
//     var selected = $('.js-list-item.js-current-panel')
//     var anchors = $('.js-list-item')
//
//     var pos = anchors.index(selected)
//     var next = anchors.get(pos+1)
//     var prev = anchors.get(pos-1)
//
//     target = $(prev)
//
//     $(selected).removeClass('js-current-panel')
//     $(prev).addClass('js-current-panel')
//
//     if (target.offset()) {
//       $('html, body').animate({scrollTop: target.offset().top + 'px'}, 600)
//     }
//
//
//     e.preventDefault()
// })

  function goToNextAnchor() {
    const hash = window.location.hash.substr(1)
    if (hash === 'about') {
      location.hash = '#experience'
      // console.log('ok')
    }
  }





  //
  // function goToNextAnchor2() {
  //   alert('click workssss')
  //   console.log(window.location.hash.substr(1))
  // }









  document.getElementById('next_entry2').addEventListener('click', goToNextAnchor)





















})
