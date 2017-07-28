$(document).ready(main);
           var contador = 1;

           function main(){
               $('.menu_bar').click(function(){
                   // $('nav').toggle();

                   if(contador == 1){
                       $('.menu-wsi').animate({
                           left: '0'
                       });
                       contador = 0;
                       $("#parar").addClass("parar");
                   } else {
                       contador = 1;
                        $("#parar").removeClass("parar");
                       $('.menu-wsi').animate({
                           left: '-100%'
                       });
                   }
               });


    };
