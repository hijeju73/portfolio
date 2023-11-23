
  $(".menuOpen").toggle(function() {
    $("#gnb").slideDown('slow');
}, function() {
    $("#gnb").slideUp('normal');
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width();
var winh =  $(document).height();

if( screenSize > 768){
 $('#gnb').height('auto');
}else{
 $('#gnb').height(winh);
}

var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
   var screenSize = $(window).width();  //가로 해상도
   if( screenSize > 768){  //소형테블릿 이상이면
     $("#gnb").show();
     $('#gnb').height('auto');
     current=1; //소형테블릿이상
   }
   if(current==1 && screenSize <= 768){
     $("#gnb").hide();
     $('#gnb').height(winh);
      current=0; //모바일
   }
 }); 
 

  //스크롤 이동시 나타나는 top

$(window).on('scroll',function(){ 

  var scroll = $(window).scrollTop(); 

  if(scroll>1000){ 

      $('.top_move').fadeIn('slow'); 

  }else{

      $('.top_move').fadeOut('fast');

  }
  
  //헤더영역 스크롤시 배경색상 처리
  var winh = $(window).height();  
  if(scroll>winh){ 
      $('#headerArea').css('background','rgba(0,0,0,.8)');
  }else{
      $('#headerArea').css('background','rgba(0,0,0,0)');
  }

});  

//top 클릭시 상단 스무스 이동

$('.top_move').click(function(e){

      e.preventDefault();

      $("html,body").stop().animate({"scrollTop":0},1000); 

});
   
