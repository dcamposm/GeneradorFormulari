$("#boto1").click(generadorFormulari);

function generadorFormulari(){
   var container = document.createElement("div");
   $(container).attr("id", $('#form').val());
   $(container).attr("class", "container");
   var titul = document.createElement("h1");
   var menu = document.createElement("div");
   $(menu).attr("class", "menu");
   
   /*---------------------MENU-----------------------*/
   $(menu).append("<h3>Menu</h3>");
   $(menu).append("<button id=\"inputText\">Text</button>");
   $(menu).append("<button id=\"inputNum\">Numero</button>");
   $(menu).append("<button id=\"inputMail\">Mail</button>");
   $(menu).append("<button id=\"inputPass\">Password</button>");
   /*-----------------------------------------------*/   
   $(titul).append($('#form').val());
   
   $(container).append(titul);
   $(container).append(menu);
   $('main').append(container);
   
}  
