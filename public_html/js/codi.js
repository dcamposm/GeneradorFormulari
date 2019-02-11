$("#boto1").click(generadorFormulari);
function insertInput(){
    var inp = $(this).text();
    //alert($(this).parent());
    var form = $(this).attr("id");
    
    var formArray = form.split("_", 2);
    //alert(formArray[1]);
    switch (inp){
        case "Text":
            $("#contForm_"+formArray[1]).append("Formulari text: <input type=\"text\">");
            break;
        case "Numero":
            $("#contForm_"+formArray[1]).append("Formulari numero: <input type=\"number\">");
            break;
        case "Mail":
            $("#contForm_"+formArray[1]).append("Formulari correu: <input type=\"email\" value=\"Formulari correu\">");
            break;
        case "Password":
            $("#contForm_"+formArray[1]).append("Formulari Password: <input type=\"password\">");
            break;
        case "Date":
            $("#contForm").append("Formulari data: <input type=\"date\">");
            break;
        case "File":
            $("#contForm").append("Formulari fitxer: <input type=\"file\">");
            break;
    }
};
function generadorFormulari(){
   var nomForm = $('#form').val();
   var container = document.createElement("div");
   $(container).attr("id", nomForm);
   $(container).attr("class", "container");
   var titul = document.createElement("h1");
   var menu = document.createElement("div");
   $(menu).attr("class", "menu");
   var contForm = document.createElement("div");
   $(contForm).attr("id", "contForm_"+nomForm);
   $(contForm).attr("class", "contForm_"+nomForm);
   
   /*---------------------MENU-----------------------*/
   $(menu).append("<h3>Menu</h3>");
   $(menu).append("<button id=\"inputText_"+nomForm+"\">Text</button>");
   $(menu).append("<button id=\"inputNum_"+nomForm+"\">Numero</button>");
   $(menu).append("<button id=\"inputMail_"+nomForm+"\">Mail</button>");
   $(menu).append("<button id=\"inputPass_"+nomForm+"\">Password</button>");
   $(menu).append("<button id=\"inputDate\">Date</button>");
   $(menu).append("<button id=\"inputFile\">File</button>");
   /*---------------------END------------------------*/   
   $(titul).append(nomForm);
   
   $(container).append(titul);
   $(container).append(contForm);
   $(container).append(menu);
   
   $('main').append(container);
   /*--------------------EVENTS-----------------------*/ 
   $("#inputText_"+nomForm).click(insertInput); 
   $("#inputNum_"+nomForm).click(insertInput); 
   $("#inputMail_"+nomForm).click(insertInput); 
   $("#inputPass_"+nomForm).click(insertInput);
   $("#inputDate").click(insertInput);
   $("#inputFile").click(insertInput);
};  


