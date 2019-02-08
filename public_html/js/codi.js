$("#boto1").click(generadorFormulari);

function generadorFormulari(){
   var container = document.createElement("div");
   var titul = document.createElement("h3");

   $(titul).append($('#form').val());

   $(container).append(titol);
   $('main').append(container);
   
}  
