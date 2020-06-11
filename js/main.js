function refrescar(){
     //Actualiza la página
     location.reload();
   }
   // al hacer click en reset
   $('#reset').on('click', function(){
        refrescar();
   })
//al hacer click en la celda
$('.cuadrados').on('click', function() {
   var turno= $('#turno').html();
   if (turno=="X"){
        $(this).html('X');
        $(this).addClass('bloqueo');
        $('#turno').html('O');   
   }
   else {
        $(this).html('O');
        $(this).addClass('bloqueo');
        $('#turno').html('X');
   } 
   //--------------> HORIZONTAL
   //X
   if ($('.cuadrados').eq(0).html()=="X"&&$('.cuadrados').eq(1).html()=="X"&& $('.cuadrados').eq(2).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(3).html()=="X"&&$('.cuadrados').eq(4).html()=="X"&& $('.cuadrados').eq(5).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(6).html()=="X"&&$('.cuadrados').eq(7).html()=="X"&& $('.cuadrados').eq(8).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   //O
   if ($('.cuadrados').eq(0).html()=="O"&&$('.cuadrados').eq(1).html()=="O"&& $('.cuadrados').eq(2).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(3).html()=="O"&&$('.cuadrados').eq(4).html()=="O"&& $('.cuadrados').eq(5).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(6).html()=="O"&&$('.cuadrados').eq(7).html()=="O"&& $('.cuadrados').eq(8).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
      //--------------> VERTICAL
   //X
   if ($('.cuadrados').eq(0).html()=="X"&&$('.cuadrados').eq(3).html()=="X"&& $('.cuadrados').eq(6).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(1).html()=="X"&&$('.cuadrados').eq(4).html()=="X"&& $('.cuadrados').eq(7).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(2).html()=="X"&&$('.cuadrados').eq(5).html()=="X"&& $('.cuadrados').eq(8).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   //O
   if ($('.cuadrados').eq(0).html()=="O"&&$('.cuadrados').eq(3).html()=="O"&& $('.cuadrados').eq(6).html()=="O"){
     $('#modal').modal('show')
   }
   else if($('.cuadrados').eq(1).html()=="O"&&$('.cuadrados').eq(4).html()=="O"&& $('.cuadrados').eq(7).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(2).html()=="O"&&$('.cuadrados').eq(5).html()=="O"&& $('.cuadrados').eq(8).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
         //--------------> DIAGONAL
   //X
   if ($('.cuadrados').eq(0).html()=="X"&&$('.cuadrados').eq(4).html()=="X"&& $('.cuadrados').eq(8).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(2).html()=="X"&&$('.cuadrados').eq(4).html()=="X"&& $('.cuadrados').eq(6).html()=="X"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   //O
   if ($('.cuadrados').eq(0).html()=="O"&&$('.cuadrados').eq(4).html()=="O"&& $('.cuadrados').eq(8).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   }
   else if($('.cuadrados').eq(2).html()=="O"&&$('.cuadrados').eq(4).html()=="O"&& $('.cuadrados').eq(6).html()=="O"){
     $('#modal').modal('show');
     setTimeout(refrescar, 3000);
   } 
});

 



