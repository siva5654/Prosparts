 $(document).ready(function(){
            $('.pp-usc').click(function(){
               $('.pp-flags').toggleClass('pp-inopen');
            })
            $('.pp-menu').click(function(){
               $('body').toggleClass('pp-navopen');
            })
            $('.overlay').click(function(){
               $('body').removeClass('pp-navopen');
            })
         })

  $('.plogin').click(function(){
            $('.ppm-login').addClass('ppm-popopen');
            $('body').addClass('ppm-csl');
          })
           $('.overlay , .ppm-closebtn , .ppm-cancelcp').click(function(){
             $('.ppm-login').removeClass('ppm-popopen');
               $('body').removeClass('ppm-csl');
            })
            $('.pp-nedmore >span').click(function(){
            $('.ppm-help').addClass('ppm-popopen');
            $('body').addClass('ppm-csl');
          })
           $('.overlay , .ppm-closebtn , .ppm-cancelcp').click(function(){
             $('.ppm-help').removeClass('ppm-popopen');
               $('body').removeClass('ppm-csl');
            })

            $('.psignup , .pp-sformgrp >span , .pp-sbpop').click(function(){
            $('.pps-singup').addClass('ppm-popopen');
            $('body').addClass('ppm-csl');
          })
           $('.overlay , .ppm-closebtn , .ppm-cancelcp').click(function(){
             $('.pps-singup').removeClass('ppm-popopen');
               $('body').removeClass('ppm-csl');
            })




$('.common').on('blur',function(){
  if($(this).val() == '')
  {
    $(this).css('border','1px solid red');
  }
  else{
    $(this).css('border','1px solid #57575773');
  }
});
$('.ppm-form1').submit(function(){
  var login=true;
  if($('.firstname').val() == '')
  {
    $('.firstname').css('border','1px solid red');
    login = false;
  }
  else{
    $('.firstname').css('border','1px solid #57575773');
  }
  if($('.lname').val() == '')
  {
    $('.lname').css('border','1px solid red');
    login = false;
  }
  else{
    $('.lname').css('border','1px solid #57575773');
  }

  if($('.email').val() == '')
  {
    $('.email').css('border','1px solid red');
    login = false;
  }
  else{
    $('.email').css('border','1px solid #57575773');
  }

  if($('.number').val() == '')
  {
    $('.number').css('border','1px solid red');
    login = false;
  }
  else{
    $('.number').css('border','1px solid #57575773');
  }

  if($('.password').val() == '')
  {
    $('.password').css('border','1px solid red');
    login = false;
  }
  else{
    $('.password').css('border','1px solid #57575773');
  }
  if($('.adss').val() == '')
  {
    $('.adss').css('border','1px solid red');
    login = false;
  }
  else{
    $('.adss').css('border','1px solid #57575773');
  }
   if($('.adss1').val() == '')
  {
    $('.adss1').css('border','1px solid red');
    login = false;
  }
  else{
    $('.adss1').css('border','1px solid #57575773');
  }
   if($('.adss2').val() == '')
  {
    $('.adss2').css('border','1px solid red');
    login = false;
  }
  else{
    $('.adss2').css('border','1px solid #57575773');
  }
   if($('.adss3').val() == '')
  {
    $('.adss3').css('border','1px solid red');
    login = false;
  }
  else{
    $('.adss3').css('border','1px solid #57575773');
  }
  
  return login;
})




$('.ppm-form').submit(function(){
  var login=true;
   if($('.email1').val() == '')
  {
    $('.email1').css('border','1px solid red');
    login = false;
  }
  else{
    $('.email1').css('border','1px solid #57575773');
  }
  if($('.password1').val() == '')
  {
    $('.password1').css('border','1px solid red');
    login = false;
  }
  else{
    $('.password1').css('border','1px solid #57575773');
  }
  return login;
})