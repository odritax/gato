   //-----------------JAVASCRIPT------------------------  
   const cuadrados= document.querySelectorAll('.cuadrados');

   function traer_valores() {
      var valores = [];
      // recorrer las celdas trayendome el valor de cada una
      cuadrados.forEach(function(valor){
          var valor_celda=valor.innerHTML;
          valores.push(valor_celda); 
      });
      console.log(valores); 
   };
      function add_winner_class(num1,num2,num3){
        cuadrados[num1].classList.add('ganadora');
        cuadrados[num2].classList.add('ganadora');
        cuadrados[num3].classList.add('ganadora');
    }

    function reset(){
      cuadrados.innerHTML='&nbsp';
      cuadrados.classList.remove('bloqueo');
      turno.innerHTML='X';
      cuadrados.classList.remove('ganadora');
    }
    // al hacer click en reset
    document.querySelector('#reset').addEventListener('click', function(){
      reset();
      puntaje_x=0;
      puntaje_y=0;
      localStorage.clear();
      document.querySelector('#puntaje_X').innerHTML="0";
      document.querySelector('#puntaje_y').innerHTML="0";
    });

  function x_puntaje(){
      const puntaje_x=document.querySelector('#puntaje_x').innerHTML;
      puntaje_x=parseInt(puntaje_x);
      puntaje_x+=1;
      document.querySelector('#puntaje_x'),innerHTML=puntaje_x;
      //LOCAL STORGE
      localStorage.setItem('valorx',puntaje_x);
    }
    function y_puntaje(){
      const puntaje_y=document.querySelector('#puntaje_y').innerHTML;
      puntaje_y=parseInt(puntaje_y);
      puntaje_y+=1;
      document.querySelector('#puntaje_y'),innerHTML=puntaje_y;
      //LOCAL STORGE
      localStorage.setItem('valoro',puntaje_y);
    }
 

  for( let i= 0; i < cuadrados.length; i++ ){ 
      //al hacer click en la celda
      cuadrados[i].addEventListener('click', function(){
          const turno=document.getElementById('turno');
          if (turno.innerHTML=="X"){
            cuadrados[i].innerHTML="X";
            cuadrados[i].classList.add('bloqueo');
            turno.innerHTML="O";
          }
          else{
            cuadrados[i].innerHTML="O";
            cuadrados[i].classList.add('bloqueo');
            turno.innerHTML="X";
          }

          var valores=traer_valores();
          //--------------> HORIZONTAL
          //X
          if (valores[0]=="X"&& valores[1]=="X"&& valores[2]=="X"){
            x_puntaje();
            add_winner_class(0,1,2);
            // document.querySelector('#ganador'),innerHTML("X");
            // $('#ganador').text("X");
            // no_te_metas_en_mis_asuntoz();
          }
          else if(valores[3]=="X"&& valores[4]=="X"&& valores[5]=="X"){
            x_puntaje();
            add_winner_class(3,4,5);
            // $('#ganador').text("X");
            // no_te_metas_en_mis_asuntoz();   
        }
    });   
  }

  
 //-----------------JQUERY------------------------   
    // function traer_valores() {
    //     var valores = [];
    //     // recorrer las celdas trayendome el valor de cada una
    //     $('.cuadrados').each(function() {
    //         var valor_celda = $(this).html();
    //         valores.push(valor_celda);
    //     });
    //     return valores;
    //  }
    // function reset(){
    //     $('.cuadrados').html("&nbsp;");
    //     $('.cuadrados').removeClass('bloqueo');
    //     $('#turno').html('X');
    //     $('.cuadrados').removeClass('ganadora');
    // }
    
    // function x_puntaje(){
    //   var puntaje_x=$('#puntaje_x').html();
    //   puntaje_x=parseInt(puntaje_x);
    //   puntaje_x+=1;
    //   $('#puntaje_x').html(puntaje_x);
    //   //LOCAL STORGE
    //   localStorage.setItem('valorx',puntaje_x);
    // }
    // function y_puntaje(){
    //   var puntaje_y=$('#puntaje_y').html();
    //   puntaje_y=parseInt(puntaje_y);
    //   puntaje_y+=1;
    //   $('#puntaje_y').html(puntaje_y);
    //   //LOCAL STORGE
    //   localStorage.setItem('valoro',puntaje_y);
    // }
    // //LOCAL STORGE 
    // //--->X
    // if (localStorage.getItem('valorx')==null){
    //   $('#puntaje_x').text('0');
    // }
    // else
    // {
    //   $('#puntaje_x').html(localStorage.getItem('valorx'));
    // }
    //  //--->O
    // if (localStorage.getItem('valoro')==null){
    //   $('#puntaje_y').text('0');
    // }
    // else
    // {
    //   $('#puntaje_y').html(localStorage.getItem('valoro'));
    // }
    //   // al hacer click en reset
    // $('#reset').on('click', function(){
    //     reset();
    //     puntaje_x=0;
    //     puntaje_y=0;
    //     localStorage.clear();
    //     $('#puntaje_x').html('0');
    //     $('#puntaje_y').html('0');
    // })
    // function add_winner_class(num1,num2,num3){
    //   $('.cuadrados').eq(num1).addClass('ganadora');
    //   $('.cuadrados').eq(num2).addClass('ganadora');
    //   $('.cuadrados').eq(num3).addClass('ganadora');
    // }

    // function no_te_metas_en_mis_asuntoz(){
    //   $('.cuadrados').addClass('bloqueo');
    //   setTimeout($('#modal').modal('show'), 3000);
    //   setTimeout(reset, 3000);
    // }
    // //al hacer click en la celda
    // $('.cuadrados').on('click', function() {
    //   var turno= $('#turno').html();
    //   if (turno=="X"){
    //         $(this).html('X');
    //         $(this).addClass('bloqueo');
    //         $('#turno').html('O');   
    //   }
    //   else {
    //         $(this).html('O');
    //         $(this).addClass('bloqueo');
    //         $('#turno').html('X');
    //   } 
    //   var valores= traer_valores();
    //   //--------------> HORIZONTAL
    //   //X
    //   if (valores[0]=="X"&& valores[1]=="X"&& valores[2]=="X"){
    //     x_puntaje();
    //     add_winner_class(0,1,2);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[3]=="X"&& valores[4]=="X"&& valores[5]=="X"){
    //     x_puntaje();
    //     add_winner_class(3,4,5);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    //   else if(valores[6]=="X"&& valores[7]=="X"&& valores[8]=="X"){
    //     x_puntaje();
    //     add_winner_class(6,7,8);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   //O
    //   if (valores[0]=="O"&& valores[1]=="O"&& valores[2]=="O"){
    //     y_puntaje();
    //     add_winner_class(0,1,2);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[3]=="O"&& valores[4]=="O"&& valores[5]=="O"){
    //     y_puntaje();
    //     add_winner_class(3,4,5);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    //   else if(valores[6]=="O"&& valores[7]=="O"&& valores[8]=="O"){
    //     y_puntaje();
    //     add_winner_class(6,7,8);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   //--------------> VERTICAL
    //   //X
    //   if (valores[0]=="X"&& valores[3]=="X"&& valores[6]=="X"){
    //     x_puntaje();
    //     add_winner_class(0,3,6);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[1]=="X"&& valores[4]=="X"&& valores[7]=="X"){
    //     x_puntaje();
    //     add_winner_class(1,4,7);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    //   else if(valores[2]=="X"&& valores[5]=="X"&& valores[8]=="X"){
    //     x_puntaje();
    //     add_winner_class(2,5,8);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   //O
    //   if (valores[0]=="O"&& valores[3]=="O"&& valores[6]=="O"){
    //     y_puntaje();
    //     add_winner_class(0,3,6);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[1]=="O"&& valores[4]=="O"&& valores[7]=="O"){
    //     y_puntaje();
    //     add_winner_class(1,4,7);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    //   else if(valores[2]=="O"&& valores[5]=="O"&& valores[8]=="O"){
    //     y_puntaje();
    //     add_winner_class(2,5,8);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();
    //   } 
    //   //--------------> DIAGONAL
    //   //X
    //   if (valores[0]=="X"&& valores[4]=="X"&& valores[8]=="X"){
    //     x_puntaje();
    //     add_winner_class(0,4,8);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[2]=="X"&& valores[4]=="X"&& valores[6]=="X"){
    //     x_puntaje();
    //     add_winner_class(2,4,6);
    //     $('#ganador').text("X");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    //   //O
    //   if (valores[0]=="O"&& valores[4]=="O"&& valores[8]=="O"){
    //     y_puntaje();
    //     add_winner_class(0,4,8);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();
    //   }
    //   else if(valores[2]=="O"&& valores[4]=="O"&& valores[6]=="O"){
    //     y_puntaje();
    //     add_winner_class(2,4,6);
    //     $('#ganador').text("O");
    //     no_te_metas_en_mis_asuntoz();   
    //   }
    // });



    



