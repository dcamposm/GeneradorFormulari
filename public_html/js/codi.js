contGlobal = 0;
contRadio = Array();
contCheck = Array();
contSelect = Array();
contNext = Array();
contNextR = Array();
contNextC = Array();
contNextS = Array();
$("#boto1").click(generadorFormulari);

function insertInput(){
    var inp = $(this).text();
    //alert($(this).parent());
    var form = $(this).attr("id");

    var formArray = form.split("_", 2);
    var butons = document.createElement("div");
    $(butons).attr("class", "butons");
    //alert(formArray[1]);
    switch (inp){
        case "Text":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari text:</div><input type=\"text\">");
            $(butons).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">M</button>");
            break;
        case "Numero":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari numero:</div><input type=\"number\">");
            $(butons).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">M</button>");
            break;
        case "Mail":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari correu:</div><input type=\"email\" value=\"Formulari correu\">");
            break;
        case "Password":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari Password:</div><input type=\"password\">");
            $(butons).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">M</button>");
            break;
        case "Date":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari data:</div><input type=\"date\">");
            break;
        case "File":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div class=\"textFrom\">Formulari fitxer:</div><input type=\"file\">");
            break;
        case "Radio":
            if (contRadio[formArray[1]]==1){
                $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
                $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div id=\"radio_"+formArray[1]+"\" class=\"radioInput\"></div>");                
            }            
            $("#radio_"+formArray[1]).append("<input type=\"radio\" name=\"radioOp_"+formArray[1]+"\"> Option "+contRadio[formArray[1]]+"<br>");
            contRadio[formArray[1]]++;
            break;
        case "NewRadio":
            $("#radio_"+formArray[1]).attr('id', 'radio_'+formArray[1]+contNextR[formArray[1]]);
            contNextR[formArray[1]]++;
            contRadio[formArray[1]]=1;
            
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div id=\"radio_"+formArray[1]+"\" class=\"radioInput\"></div>");  
            $("#radio_"+formArray[1]).append("<input type=\"radio\" name=\"radioOp_"+formArray[1]+"\"> Option "+contRadio[formArray[1]]+"<br>");
            contRadio[formArray[1]]++;
            break;
        case "Checkbox":
            if (contCheck[formArray[1]]==1){
                $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
                $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div id=\"check_"+formArray[1]+"\" class=\"checkInput\"></div>");
            }
            $("#check_"+formArray[1]).append("<input type=\"checkbox\" name=\"checkOp_"+formArray[1]+"\"> Option "+contCheck[formArray[1]]+"<br>");
            contCheck[formArray[1]]++;
            break;
        case "NewCheckbox":
            //alert(contNext[formArray[1]]);
            $("#check_"+formArray[1]).attr('id', 'check_'+formArray[1]+contNextC[formArray[1]]);
            contNextC[formArray[1]]++;
            contCheck[formArray[1]]=1;
            
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div id=\"check_"+formArray[1]+"\" class=\"checkInput\"></div>");
            $("#check_"+formArray[1]).append("<input type=\"checkbox\" name=\"checkOp_"+formArray[1]+"\"> Option "+contCheck[formArray[1]]+"<br>");
            contCheck[formArray[1]]++;
            break;
        case "Selected":
            if (contSelect[formArray[1]]==1){
                $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
                $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<select id=\"select_"+formArray[1]+"\" class=\"selectInput\"></select><br>");
            }
            $("#select_"+formArray[1]).append("<option value=\"checkOp_"+formArray[1]+"\">Option"+contSelect[formArray[1]]+"</option>");
            contSelect[formArray[1]]++;
            break; 
        case "NewSelected":
            //alert(contNext[formArray[1]]);
            $("#select_"+formArray[1]).attr('id', 'select_'+formArray[1]+contNextS[formArray[1]]);
            contNextS[formArray[1]]++;
            contSelect[formArray[1]]=1;
            
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<select id=\"select_"+formArray[1]+"\"  class=\"selectInput\"></select><br>");
            $("#select_"+formArray[1]).append("<option value=\"checkOp_"+formArray[1]+"\">Option"+contSelect[formArray[1]]+"</option>");
            contSelect[formArray[1]]++;
            break;
    }
    
    $(butons).append("<button id=\"buttDel_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttDel\">X</button>");
    $("#contInput_"+formArray[1]+contNext[formArray[1]]).append(butons);
    
    $("#buttDel_"+formArray[1]+contNext[formArray[1]]).click(deleteInput2);
    $("#buttMod_"+formArray[1]+contNext[formArray[1]]).click(modifyInput);
    contNext[formArray[1]]++;
};

function deleteInput(){
    $(this).parent().parent().parent().remove();
};

function deleteInput2(){
    $(this).parent().parent().remove();
};

function modifyInput(){
    switch ($(this).parent().prev().attr('type')) {
        case "text": 
            var inputLength = parseInt(prompt("Indica la longitud del Input:"));
            $(this).parent().prev().attr('size', inputLength);
            $(this).parent().prev().attr('maxlength', inputLength);
        break;
        case "number":
            $(this).parent().prev().attr('name', 'quantity');
            var inputMin = parseInt(prompt("Indica el número mínim:"));
            $(this).parent().prev().attr('min', inputMin);
            var inputMax = parseInt(prompt("Indica el número màxim:"));
            $(this).parent().prev().attr('max', inputMax);
        break;
    }
};

function generadorFormulari(){
  if ($('#form').val() != "") {
     var nomForm = $('#form').val().split(" ").join("-");
     var container = document.createElement("fieldset"); //div y borrar legend
     var legend = document.createElement("legend");

     $(container).attr("id", nomForm+contGlobal);
     $(container).attr("class", "container");
     //var titul = document.createElement("h1");
     var menu = document.createElement("div");
     $(menu).attr("class", "menu");
     var contForm = document.createElement("div");
     $(contForm).attr("id", "contForm_"+nomForm+contGlobal);
     $(contForm).attr("class", "contForm");
     
     /*---------------------MENU-----------------------*/
     $(menu).append("<h3>Menu<button id=\"inputForm_"+nomForm+contGlobal+"\" class=\"inputForm\">X</button></h3>");
     //$(menu).append("");
     $(menu).append("<button class=\"w3-button w3-tiny  w3-white w3-border w3-border-blue w3-round-xlarge\" id=\"inputText_"+nomForm+contGlobal+"\">Text</button>");
     $(menu).append("<button id=\"inputNum_"+nomForm+contGlobal+"\">Numero</button>");
     $(menu).append("<button id=\"inputMail_"+nomForm+contGlobal+"\">Mail</button>");
     $(menu).append("<button id=\"inputPass_"+nomForm+contGlobal+"\">Password</button>");
     $(menu).append("<button id=\"inputDate_"+nomForm+contGlobal+"\">Date</button>");
     $(menu).append("<button id=\"inputFile_"+nomForm+contGlobal+"\">File</button>");
     $(menu).append("<button id=\"inputRadio_"+nomForm+contGlobal+"\">Radio</button>");
     $(menu).append("<button id=\"inputNewRadio_"+nomForm+contGlobal+"\">NewRadio</button>");
     $(menu).append("<button id=\"inputCheckbox_"+nomForm+contGlobal+"\">Checkbox</button>");
     $(menu).append("<button id=\"inputNewCheckbox_"+nomForm+contGlobal+"\">NewCheckbox</button>");
     $(menu).append("<button id=\"inputSelected_"+nomForm+contGlobal+"\">Selected</button>");
     $(menu).append("<button id=\"inputNewSelected_"+nomForm+contGlobal+"\">NewSelected</button>");
     /*---------------------END------------------------*/   
     $(legend).append(nomForm.split("-").join(" "));
     
     $(container).append(legend);
     $(container).append(menu);
     $(container).append(contForm);
     
     
     $('main').append(container);
     /*--------------------EVENTS-----------------------*/ 
     $("#inputText_"+nomForm+contGlobal).click(insertInput); 
     $("#inputNum_"+nomForm+contGlobal).click(insertInput); 
     $("#inputMail_"+nomForm+contGlobal).click(insertInput); 
     $("#inputPass_"+nomForm+contGlobal).click(insertInput);
     $("#inputDate_"+nomForm+contGlobal).click(insertInput);
     $("#inputFile_"+nomForm+contGlobal).click(insertInput);
     $("#inputRadio_"+nomForm+contGlobal).click(insertInput);
     $("#inputNewRadio_"+nomForm+contGlobal).click(insertInput);
     $("#inputCheckbox_"+nomForm+contGlobal).click(insertInput);
     $("#inputNewCheckbox_"+nomForm+contGlobal).click(insertInput);
     $("#inputSelected_"+nomForm+contGlobal).click(insertInput);
     $("#inputNewSelected_"+nomForm+contGlobal).click(insertInput);
     $("#inputForm_"+nomForm+contGlobal).click(deleteInput);
     
     contRadio[nomForm+contGlobal]=1;
     contCheck[nomForm+contGlobal]=1;
     contSelect[nomForm+contGlobal]=1;
     contNext[nomForm+contGlobal]=1;
     contNextR[nomForm+contGlobal]=1;
     contNextC[nomForm+contGlobal]=1;
     contNextS[nomForm+contGlobal]=1;
     contGlobal++;
   } else {
      alert ("Introdueix un nom de fomulari vàlid!");
   }
};  


