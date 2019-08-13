
function toggleSidebar() {
    document.getElementById("sidebar-menu").classList.toggle('active');
    document.getElementById("content-wrapper").classList.toggle('active');
    document.getElementById("geometric").classList.toggle('active');
  }
  
  
  $("#toggle-button").click(function(){
    $(this).toggleClass("active")
  });
  
  
  
  
  var myVar20191, myVar20192, myVar20193;
  
  var currentBackground20191 = 0,
      backgrounds20191 = [];
  
      backgrounds20191[0] = '/images/main01.jpg';
      backgrounds20191[1] = '/images/main02.jpg';
      backgrounds20191[2] = '/images/main03.jpg';
  
  function changeBackground20191() {
    currentBackground20191++;
    if(currentBackground20191 > 2) currentBackground20191 = 0;
  
  
    $('#ratio2019-1').fadeOut(100, function() {
      $('#ratio2019-1').css({
        'background': "url('" + backgrounds20191[currentBackground20191] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
      });
  
      $('#ratio2019-1').fadeIn(100);
  
    });
  

  
    myVar20191 = setTimeout(changeBackground20191, 3000);

  }
  

 /*slider button controlling preview */

  $('.slick-item-1').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'flex'});
    $('.ratio-container2019-2').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'none'});
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });


  $('.slick-item-2').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'flex'});
    $('.ratio-container2019-2').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'none'});
    $('.p2019-1-a').removeClass('red-border');
    $('.p2019-1-b').removeClass('red-border');
    $('.p2019-1-c').removeClass('red-border');
  });
  

  $('.slick-item-3').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'none'});
    $('.ratio-container2019-2').css({'display': 'flex'});
    $('.p2019-2-a').removeClass('red-border');
    $('.p2019-2-b').removeClass('red-border');
    $('.p2019-2-c').removeClass('red-border');
  });


  
  $('.slick-item-4').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'none'});
    $('.ratio-container2019-2').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'flex'});
    $('.p2019-3-a').removeClass('red-border');
    $('.p2019-3-b').removeClass('red-border');
    $('.p2019-3-c').removeClass('red-border');
  });

  
  $('.project-change2019-1').on("click", function() {
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });

  $('.project-change2019-2').on("click", function() {
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });

  $('.project-change2019-3').on("click", function() {
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });


  
  
  $('.slick-item-5').on("click", function() {
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });
  
  
  $('.slick-item-9').on("click", function() {
    clearTimeout(myVar20191);
    clearTimeout(myVar20192);
    clearTimeout(myVar20193);
  });


  /*end slider button controlling preview */











  


  $('.slick-item-2').on("click", changeBackground20191);
  $('.slick-item-3').on("click", changeBackground20192);
  $('.slick-item-4').on("click", changeBackground20193);
  
  


 
  
  
  
  
  var currentBackground20192 = 0,
      backgrounds20192 = [];
  
      backgrounds20192[0] = '/images/main04.jpg';
      backgrounds20192[1] = '/images/main05.jpg';
      backgrounds20192[2] = '/images/main06.jpg';
  
  function changeBackground20192() {
  
    
    currentBackground20192++;
    if(currentBackground20192 > 2) currentBackground20192 = 0;
    
  
    $('#ratio2019-2').fadeOut(100, function() {
      $('#ratio2019-2').css({
        'background-image': "url('" + backgrounds20192[currentBackground20192] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
      });
  
      $('#ratio2019-2').fadeIn(100);
  
    });
  
      myVar20192 = setTimeout(changeBackground20192, 3000)
  
  
  }
  
  
  
      var currentBackground20193 = 0,
      backgrounds20193 = [];
  
      backgrounds20193[0] = '/images/main07.png';
      backgrounds20193[1] = '/images/main08.jpg';
      backgrounds20193[2] = '/images/main09.jpg';
  
      function changeBackground20193() {
  
    
      currentBackground20193++;
      if(currentBackground20193 > 2) currentBackground20193 = 0;
    
  
      $('#ratio2019-3').fadeOut(100, function() {
        $('#ratio2019-3').css({
          'background-image': "url('" + backgrounds20193[currentBackground20193] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
       });
  
      $('#ratio2019-3').fadeIn(100);
  
      });
  
      myVar20193 = setTimeout(changeBackground20193, 3000)
  
  
  }
  
  


  
    /*Project change 2019-1*/

    $('.p2019-1-a').click(function() {
      $('#ratio2019-1').css({
        'background-image': "url('images/main01.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-1-b').removeClass('red-border');
      $('.p2019-1-c').removeClass('red-border');
    });

    $('.p2019-1-b').click(function() {
      $('#ratio2019-1').css({
        'background-image': "url('images/main11.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-1-a').removeClass('red-border');
      $('.p2019-1-c').removeClass('red-border');

    });

    $('.p2019-1-c').click(function() {
      $('#ratio2019-1').css({
        'background-image': "url('images/main12.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-1-a').removeClass('red-border');
      $('.p2019-1-b').removeClass('red-border');
    });


    /*end project change 2019-1*/

    /*Project change 2019-2*/

    $('.p2019-2-a').click(function() {
      $('#ratio2019-2').css({
        'background-image': "url('images/main04.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-2-b').removeClass('red-border');
      $('.p2019-2-c').removeClass('red-border');
    });

    $('.p2019-2-b').click(function() {
      $('#ratio2019-2').css({
        'background-image': "url('images/main05.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-2-a').removeClass('red-border');
      $('.p2019-2-c').removeClass('red-border');

    });

    $('.p2019-2-c').click(function() {
      $('#ratio2019-2').css({
        'background-image': "url('images/main06.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-2-a').removeClass('red-border');
      $('.p2019-2-b').removeClass('red-border');
    });


    /* end Project change 2019-2*/

    
    /*Project change 2019-3*/

    $('.p2019-3-a').click(function() {
      $('#ratio2019-3').css({
        'background-image': "url('images/main07.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-3-b').removeClass('red-border');
      $('.p2019-3-c').removeClass('red-border');
    });

    $('.p2019-3-b').click(function() {
      $('#ratio2019-3').css({
        'background-image': "url('images/main08.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-3-a').removeClass('red-border');
      $('.p2019-3-c').removeClass('red-border');

    });

    $('.p2019-3-c').click(function() {
      $('#ratio2019-3').css({
        'background-image': "url('images/main09.jpg')"
      });
      $(this).addClass('red-border');
      $('.p2019-3-a').removeClass('red-border');
      $('.p2019-3-b').removeClass('red-border');
    });


    /* end Project change 2019-3*/




  
  $('.slick').slick({
    dots: false,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 10,
    autoplay: false,
    autoplaySpeed: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchMove: true,
    rtl:false,
    responsive: [
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      }
  
    ]
  });
  
  
  
  
  
  $('.slick-next').on('mouseover',function(){
  
      $('.slick-slider').slick('slickPlay');
    
    });
  
    $('.slick-next').on('mouseleave',function(){
  
      $('.slick-slider').slick('slickPause');
    
    });
  
  
  
    $('.slick-prev').mouseover(function() {
      var slider = $('.slick');
      slider.slick('slickGoTo', 0, false);
  
    });     
  
  

