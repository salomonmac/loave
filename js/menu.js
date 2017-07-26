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
                   } else {
                       contador = 1;
                       $('.menu-wsi').animate({
                           left: '-100%'
                       });
                   }
               });


    };
               $('.menu_compartir').click(function(){
                   // $('nav').toggle();

                   if(contador == 1){
                       $('.compartir').animate({
                           left: '0'
                       });
                       contador = 0;
                   } else {
                       contador = 1;
                       $('.compartir').animate({
                           left: '-100%'
                       });
                   }
               });


                $('.menu_buscar').click(function(){
                   // $('nav').toggle();

                   if(contador == 1){
                       $('.buscar').animate({
                           left: '0'
                       });
                       contador = 0;
                   } else {
                       contador = 1;
                       $('.buscar').animate({
                           left: '-100%'
                       });
                   }
               });


               $('.menu_traduccion').click(function(){
                   // $('nav').toggle();

                   if(contador == 1){
                       $('.traduccion').animate({
                           left: '0'
                       });
                       contador = 0;
                   } else {
                       contador = 1;
                       $('.traduccion').animate({
                           left: '-100%'
                       });
                   }
               });


               $('.xxx').click(function(){
                   // $('nav').toggle();

                   if(contador == 1){
                       $('.traduccion').animate({
                           left: '-100%'
                       });
                       $('.buscar').animate({
                           left: '-100%'
                       });
                       $('.compartir').animate({
                           left: '-100%'
                       });
                       $('.menu-wsi').animate({
                           left: '-100%'
                       });
                       contador = 0;
                   }
               });
