$("#boto1").click(generadorFormulari);
function insertInput(){
    var inp = $(this).text();
    //alert(inp);
    
    switch (inp){
        case "Text":
            $("#contForm").append("Formulari text: <input type=\"text\">");
            break;
        case "Numero":
            $("#contForm").append("Formulari numero: <input type=\"number\">");
            break;
        case "Mail":
            $("#contForm").append("Formulari correu: <input type=\"email\" value=\"Formulari correu\">");
            break;
        case "Password":
            $("#contForm").append("Formulari Password: <input type=\"password\">");
            break;
    }
};
function generadorFormulari(){
   var container = document.createElement("div");
   $(container).attr("id", $('#form').val());
   $(container).attr("class", "container");
   var titul = document.createElement("h1");
   var menu = document.createElement("div");
   $(menu).attr("class", "menu");
   var contForm = document.createElement("div");
   $(contForm).attr("id", "contForm");
   $(contForm).attr("class", "contForm");
   
   /*---------------------MENU-----------------------*/
   $(menu).append("<h3>Menu</h3>");
   $(menu).append("<button id=\"inputText\">Text</button>");
   $(menu).append("<button id=\"inputNum\">Numero</button>");
   $(menu).append("<button id=\"inputMail\">Mail</button>");
   $(menu).append("<button id=\"inputPass\">Password</button>");
   /*---------------------END------------------------*/   
   $(titul).append($('#form').val());
   
   $(container).append(titul);
   $(container).append(contForm);
   $(container).append(menu);
   
   $('main').append(container);
   /*-------------------EVENTOS----------------------*/ 
   $("#inputText").click(insertInput); 
   $("#inputNum").click(insertInput); 
   $("#inputMail").click(insertInput); 
   $("#inputPass").click(insertInput); 
};  


