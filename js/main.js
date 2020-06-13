    function traer_valores() {
        var valores = [];
        // recorrer las celdas trayendome el valor de cada una
        $('.cuadrados').each(function() {
            var valor_celda = $(this).html();
            valores.push(valor_celda);
        });
        return valores;
     }
    function reset(){
        $('.cuadrados').html("&nbsp;");
        $('.cuadrados').removeClass('bloqueo');
        $('#turno').html('X');
        $('.cuadrados').removeClass('ganadora');
    }
    var puntaje_x=$('#puntaje_x').html();
    puntaje_x=parseInt(puntaje_x);
    var puntaje_y=$('#puntaje_y').html();
    puntaje_y=parseInt(puntaje_y);
    function x_puntaje(){
      puntaje_x=puntaje_x+1;
      $('#puntaje_x').html(puntaje_x);
    }
    function y_puntaje(){
      puntaje_y=puntaje_y+1;
      $('#puntaje_y').html(puntaje_y);
    }
      // al hacer click en reset
    $('#reset').on('click', function(){
        reset();
        puntaje_x=0;
        puntaje_y=0;
        $('#puntaje_x').html('0');
        $('#puntaje_y').html('0');
    })
    function add_winner_class(num1,num2,num3){
      $('.cuadrados').eq(num1).addClass('ganadora');
      $('.cuadrados').eq(num2).addClass('ganadora');
      $('.cuadrados').eq(num3).addClass('ganadora');
    }

    function no_te_metas_en_mis_asuntoz(){
      $('.cuadrados').addClass('bloqueo');
      setTimeout($('#modal').modal('show'), 3000);
      setTimeout(reset, 3000);
    }
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
      var valores= traer_valores();
      //--------------> HORIZONTAL
      //X
      if (valores[0]=="X"&& valores[1]=="X"&& valores[2]=="X"){
        x_puntaje();
        add_winner_class(0,1,2);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[3]=="X"&& valores[4]=="X"&& valores[5]=="X"){
        x_puntaje();
        add_winner_class(3,4,5);
        no_te_metas_en_mis_asuntoz();   
      }
      else if(valores[6]=="X"&& valores[7]=="X"&& valores[8]=="X"){
        x_puntaje();
        add_winner_class(6,7,8);
        no_te_metas_en_mis_asuntoz();
      }
      //O
      if (valores[0]=="O"&& valores[1]=="O"&& valores[2]=="O"){
        y_puntaje();
        add_winner_class(0,1,2);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[3]=="O"&& valores[4]=="O"&& valores[5]=="O"){
        y_puntaje();
        add_winner_class(3,4,5);
        no_te_metas_en_mis_asuntoz();   
      }
      else if(valores[6]=="O"&& valores[7]=="O"&& valores[8]=="O"){
        y_puntaje();
        add_winner_class(6,7,8);
        no_te_metas_en_mis_asuntoz();
      }
      //--------------> VERTICAL
      //X
      if (valores[0]=="X"&& valores[3]=="X"&& valores[6]=="X"){
        x_puntaje();
        add_winner_class(0,3,6);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[1]=="X"&& valores[4]=="X"&& valores[7]=="X"){
        x_puntaje();
        add_winner_class(1,4,7);
        no_te_metas_en_mis_asuntoz();   
      }
      else if(valores[2]=="X"&& valores[5]=="X"&& valores[8]=="X"){
        x_puntaje();
        add_winner_class(2,5,8);
        no_te_metas_en_mis_asuntoz();
      }
      //O
      if (valores[0]=="O"&& valores[3]=="O"&& valores[6]=="O"){
        y_puntaje();
        add_winner_class(0,3,6);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[1]=="O"&& valores[4]=="O"&& valores[7]=="O"){
        y_puntaje();
        add_winner_class(1,4,7);
        no_te_metas_en_mis_asuntoz();   
      }
      else if(valores[2]=="O"&& valores[5]=="O"&& valores[8]=="O"){
        y_puntaje();
        add_winner_class(2,5,8);
        no_te_metas_en_mis_asuntoz();
      } 
      //--------------> DIAGONAL
      //X
      if (valores[0]=="X"&& valores[4]=="X"&& valores[8]=="X"){
        x_puntaje();
        add_winner_class(0,4,8);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[2]=="X"&& valores[4]=="X"&& valores[6]=="X"){
        x_puntaje();
        add_winner_class(2,4,6);
        no_te_metas_en_mis_asuntoz();   
      }
      //O
      if (valores[0]=="O"&& valores[4]=="O"&& valores[8]=="O"){
        y_puntaje();
        add_winner_class(0,4,8);
        no_te_metas_en_mis_asuntoz();
      }
      else if(valores[2]=="O"&& valores[4]=="O"&& valores[6]=="O"){
        y_puntaje();
        add_winner_class(2,4,6);
        no_te_metas_en_mis_asuntoz();   
      }
    });

    



