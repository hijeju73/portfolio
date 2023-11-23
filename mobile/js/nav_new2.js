$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(){
        var ind=$(this).parents('.depth1').index();
        
        //console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');   
            
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).find('span').text('+');     
       }
    });    

    //스크롤 처리
      // 스크롤 처리 (비주얼 이미지 아래로 내려갈 시 gnb 색상 교체)
      var visual_height = $('.visual').height()-70; 
      // 비주얼 이미지 높이 담기
      // -80 == gnb 높이 빼기
  
      $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
  
        if(scroll>visual_height){ //950이상의 거리가 발생되면
            $('#headerArea').css('background','rgba(34,34,34,.9)');  // 배경색 바꾸기
        }else{
            $('#headerArea').css('background','rgba(34,34,34,0)'); // 기존 배경색으로 교체
        }
      });
    
      //상단으로 이동
      $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>300){
            $('.topMove').fadeIn('slow');
        }else{
            $('.topMove').fadeOut('fast');
        }
   });
    $('.topMove').click(function(e){
         e.preventDefault();
        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000);
    });

    
  });


