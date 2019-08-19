
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




      var currentProjectDescription20191 = 0,
      projectDescription20191 = [];

      projectDescription20191[0] = "P2019-1-a / about.....";
      projectDescription20191[1] = "P2019-1-b / about.....";
      projectDescription20191[2] = "P2019-1-c / about.....";


  
  function changeBackground20191() {
    currentBackground20191++;
    if(currentBackground20191 > 2) currentBackground20191 = 0;

    currentProjectDescription20191++;
    if(currentProjectDescription20191 > 2) currentProjectDescription20191 = 0;
  
    
 
  
    $('#ratio2019-1').fadeOut(100, function() {
      $('#ratio2019-1').css({
        'background': "url('" + backgrounds20191[currentBackground20191] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
      });

      
      $('#ratio2019-1').fadeIn(100);
  
    });
    
    
    document.querySelector('#project-description20191').innerHTML = "" + projectDescription20191[currentProjectDescription20191] + "";
   

  
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
    $('.p2019-1-a').removeClass('red-outline');
    $('.p2019-1-b').removeClass('red-outline');
    $('.p2019-1-c').removeClass('red-outline');
  });
  

  $('.slick-item-3').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'none'});
    $('.ratio-container2019-2').css({'display': 'flex'});
    $('.p2019-2-a').removeClass('red-outline');
    $('.p2019-2-b').removeClass('red-outline');
    $('.p2019-2-c').removeClass('red-outline');
  });


  
  $('.slick-item-4').on("click", function() {
    $('.ratio-container2019-1').css({'display': 'none'});
    $('.ratio-container2019-2').css({'display': 'none'});
    $('.ratio-container2019-3').css({'display': 'flex'});
    $('.p2019-3-a').removeClass('red-outline');
    $('.p2019-3-b').removeClass('red-outline');
    $('.p2019-3-c').removeClass('red-outline');
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

      var currentProjectDescription20192 = 0,
      projectDescription20192 = [];

      projectDescription20192[0] = "P2019-2-a / about.....";
      projectDescription20192[1] = "P2019-2-b / about.....";
      projectDescription20192[2] = "P2019-2-c / about.....";
  
  function changeBackground20192() {
  
    
    currentBackground20192++;
    if(currentBackground20192 > 2) currentBackground20192 = 0;

    currentProjectDescription20192++;
    if(currentProjectDescription20192 > 2) currentProjectDescription20192 = 0;
    
  
    $('#ratio2019-2').fadeOut(100, function() {
      $('#ratio2019-2').css({
        'background-image': "url('" + backgrounds20192[currentBackground20192] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
      });
  
      $('#ratio2019-2').fadeIn(100);
  
    });
  
    document.querySelector('#project-description20192').innerHTML = "" + projectDescription20192[currentProjectDescription20192] + "";

      myVar20192 = setTimeout(changeBackground20192, 3000)
  
  
  }
  
  
  
      var currentBackground20193 = 0,
      backgrounds20193 = [];
  
      backgrounds20193[0] = '/images/main07.jpg';
      backgrounds20193[1] = '/images/main08.jpg';
      backgrounds20193[2] = '/images/main09.jpg';

      var currentProjectDescription20193 = 0,
      projectDescription20193 = [];

      projectDescription20193[0] = "P2019-3-a / about.....";
      projectDescription20193[1] = "P2019-3-b / about.....";
      projectDescription20193[2] = "P2019-3-c / about.....";

  
      function changeBackground20193() {
  
    
      currentBackground20193++;
      if(currentBackground20193 > 2) currentBackground20193 = 0;

      currentProjectDescription20193++;
      if(currentProjectDescription20193 > 2) currentProjectDescription20193 = 0;
    
  
      $('#ratio2019-3').fadeOut(100, function() {
        $('#ratio2019-3').css({
          'background-image': "url('" + backgrounds20193[currentBackground20193] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
       });
  
      $('#ratio2019-3').fadeIn(100);
  
      });
  
      document.querySelector('#project-description20193').innerHTML = "" + projectDescription20193[currentProjectDescription20193] + "";

      myVar20193 = setTimeout(changeBackground20193, 3000)
  
  
  }
  
  


  
    /*Project change 2019-1*/

    $('.p2019-1-a').click(function() {
      document.querySelector('#project-description20191').innerHTML="P2019-1-a / about.....";
      $('#ratio2019-1').css({
        'background-image': "url('images/main01.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-1-b').removeClass('red-outline');
      $('.p2019-1-c').removeClass('red-outline');
    });

    $('.p2019-1-b').click(function() {
      document.querySelector('#project-description20191').innerHTML="P2019-1-b / about.....";
      $('#ratio2019-1').css({
        'background-image': "url('images/main11.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-1-a').removeClass('red-outline');
      $('.p2019-1-c').removeClass('red-outline');

    });

    $('.p2019-1-c').click(function() {
      document.querySelector('#project-description20191').innerHTML="P2019-1-c / about.....";
      $('#ratio2019-1').css({
        'background-image': "url('images/main12.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-1-a').removeClass('red-outline');
      $('.p2019-1-b').removeClass('red-outline');
    });


    /*end project change 2019-1*/

    /*Project change 2019-2*/

    $('.p2019-2-a').click(function() {
      document.querySelector('#project-description20192').innerHTML="P2019-2-a / about.....";
      $('#ratio2019-2').css({
        'background-image': "url('images/main04.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-2-b').removeClass('red-outline');
      $('.p2019-2-c').removeClass('red-outline');
    });

    $('.p2019-2-b').click(function() {
      document.querySelector('#project-description20192').innerHTML="P2019-2-b / about.....";
      $('#ratio2019-2').css({
        'background-image': "url('images/main05.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-2-a').removeClass('red-outline');
      $('.p2019-2-c').removeClass('red-outline');

    });

    $('.p2019-2-c').click(function() {
      document.querySelector('#project-description20192').innerHTML="P2019-2-c / about.....";
      $('#ratio2019-2').css({
        'background-image': "url('images/main06.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-2-a').removeClass('red-outline');
      $('.p2019-2-b').removeClass('red-outline');
    });


    /* end Project change 2019-2*/

    
    /*Project change 2019-3*/

    $('.p2019-3-a').click(function() {
      document.querySelector('#project-description20193').innerHTML="P2019-3-a / about.....";
      $('#ratio2019-3').css({
        'background-image': "url('images/main07.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-3-b').removeClass('red-outline');
      $('.p2019-3-c').removeClass('red-outline');
    });

    $('.p2019-3-b').click(function() {
      document.querySelector('#project-description20193').innerHTML="P2019-3-b / about.....";
      $('#ratio2019-3').css({
        'background-image': "url('images/main08.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-3-a').removeClass('red-outline');
      $('.p2019-3-c').removeClass('red-outline');

    });

    $('.p2019-3-c').click(function() {
      document.querySelector('#project-description20193').innerHTML="P2019-3-c / about.....";
      $('#ratio2019-3').css({
        'background-image': "url('images/main09.jpg')"
      });
      $(this).addClass('red-outline');
      $('.p2019-3-a').removeClass('red-outline');
      $('.p2019-3-b').removeClass('red-outline');
    });


    /* end Project change 2019-3*/

    
  
   /* project description paragraph */

  

   /* end project description paragraph */


  
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
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1249,
        settings: {
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
          variableWidth: true,
         
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          pauseOnHover: true,
          slidesToShow: 8,
          autoplay: false,
          autoplaySpeed: 1,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          touchMove: true,
          rtl:false,
          variableWidth: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: false,
          pauseOnHover: true,
          slidesToShow: 7,
          autoplay: false,
          autoplaySpeed: 1,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          touchMove: true,
          rtl:false,
          variableWidth: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          pauseOnHover: true,
          slidesToShow: 6,
          autoplay: false,
          autoplaySpeed: 1,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          touchMove: true,
          rtl:false,
          variableWidth: true,
          
        }
      }
  
    ],
    mobileFirst: true
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
  
    

