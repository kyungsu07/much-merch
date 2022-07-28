$(function(){
    $('.ham').click(function(){
        $(this).hide()
        $('.close').show()
        $('.ham_menu').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.ham').show()
        $('.ham_menu').fadeOut()
    })

    $('.mobile_top').click(function(){
        $(this).hide()
        $('.close').show()
        $('.m_top_menu').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.mobile_top').show()
        $('.m_top_menu').fadeOut()
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $('.creator>li').click(function () {

        $('.creator>li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)
        $('.creator_box').removeClass('on')
        $('.creator_box').eq(idx).addClass('on')
    })
    
    $('.pick_list>li').click(function () {

      $('.pick_list>li').removeClass('on')
      $(this).addClass('on')

      let idx = $(this).index()
      console.log(idx)
      $('.pick_box').removeClass('on')
      $('.pick_box').eq(idx).addClass('on')
  })

  $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300) {
        $('.q_inner2').fadeIn();
      } else {
        $('.q_inner2').fadeOut();
      }
    });
    $('.q_inner2').click(function(){
      $('html, body').animate({scrollTop : 0}, 400);
      return false
    })
  })
})