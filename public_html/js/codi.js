$("#boto1").click(generadorTabla);

function canviColor(){
    $(this).css('background-color', 'red');
}

function canviColor2(){
    $(this).css('background-color', 'blue');

}

function suprimir1(){
    var fill = $(this).children();
    var cont = 0;
    var fin = $('tr:last td').length;
    
    for (var i = 0; i< fin; i++){
        if (fill[i].style.backgroundColor == "red"){
            cont++;
        }
    }
    if (cont == fin){
        $(this).remove();
    }
}

function suprimir2(){
    var fill = $(this).children();
    var cont = 0;
    var fin = $('tr:last td').length;
    
    for (var i = 0; i< fin; i++){
        if (fill[i].style.backgroundColor == "blue"){
            cont++;
        }
    }
    if (cont == fin){
        $(this).remove();
    }
}

function generadorTabla(){
    for (var i = 0; i < $('#num').val(); i++){
        var fila = document.createElement("tr");

        for (var j = 0; j < $('#num').val(); j++){
            var columna = document.createElement("td");
            $(columna).append("");
            $(fila).append(columna);
        }
        $('#contenido').append(fila);
    }
    $("#insert").remove();
    $('td').click(canviColor);
    $('td').dblclick(canviColor2);
    $('tr').click(suprimir1);
    $('tr').dblclick(suprimir2);
}
    