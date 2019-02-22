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
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari text:\"><input type=\"text\">");
            $(butons).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Longitud</button>");
            break;
        case "Numero":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari numero:\"><input type=\"number\">");
            $(butons).append("<button id=\"buttMin_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Min</button>");
            $(butons).append("<button id=\"buttMax_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Max</button>");
            break;
        case "Mail":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari correu:\"><input type=\"email\" value=\"Formulari correu\">");
            break;
        case "Password":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari Password:\"><input type=\"password\">");
            $(butons).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Longitud</button>"); 
            break;
        case "Date":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari data:\"><input type=\"date\">");
            $(butons).append("<button id=\"buttMin_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Min</button>");
            $(butons).append("<button id=\"buttMax_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">Max</button>");
            break;
        case "File":
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\"Formulari fitxer:\"><input type=\"file\">");
            break;
        case "Radio":
            $("#radio_"+formArray[1]).attr('id', 'radio_'+formArray[1]+contNextR[formArray[1]]);
            contNextR[formArray[1]]++;
            contRadio[formArray[1]+contNextR[formArray[1]]]=1;
            
            $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>"); 
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<div id=\"radio_"+formArray[1]+contNextR[formArray[1]]+"\" class=\"radioInput\"></div>");  
            $("#radio_"+formArray[1]+contNextR[formArray[1]]).append("<input type=\"radio\" name=\"radioOp_"+formArray[1]+contNextR[formArray[1]]+"\"><input id=\"textForm_"+formArray[1]+contNext[formArray[1]]+"\" class=\"textForm\" readonly value=\" Option "+contRadio[formArray[1]+contNextR[formArray[1]]]+"\"><br>");
            $(butons).append("<button id=\""+formArray[1]+contNextR[formArray[1]]+"\" class=\"buttMod\">NewOption</button>");
            contRadio[formArray[1]+contNextR[formArray[1]]]++;
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
    
    $("#textForm_"+formArray[1]+contNext[formArray[1]]).dblclick(changeName);
    $("#buttDel_"+formArray[1]+contNext[formArray[1]]).click(deleteInput2);
    $("#buttMod_"+formArray[1]+contNext[formArray[1]]).click(modifyInput);
    $("#buttMin_"+formArray[1]+contNext[formArray[1]]).click(modifyInput);
    $("#buttMax_"+formArray[1]+contNext[formArray[1]]).click(modifyInput);
    $("#"+formArray[1]+contNextR[formArray[1]]).click(modifyOption);
    contNext[formArray[1]]++;
};

function deleteInput(){
    $(this).parent().parent().parent().remove();
};

function deleteInput2(){
    $(this).parent().parent().remove();
};

function changeName(){
    $(this).removeAttr("readonly");
    $(this).blur(function (){
        $(this).attr("readonly", "");
    });
};

function modifyInput(){
    switch ($(this).parent().prev().attr('type')) {
        case "password": 
        case "text": 
            var inputLength = parseInt(prompt("Indica la longitud del Input:"));
            $(this).parent().prev().attr('size', inputLength);
            $(this).parent().prev().attr('maxlength', inputLength);
        break;
        case "date":
        case "number":
            $(this).parent().prev().attr('name', 'quantity');
            if ($(this).attr("id").startsWith('buttMin')) {
            var inputMin = prompt($(this).parent().prev().attr('type')=="date" ? "Indica la data mínima:" : "Indica el número mínim:", $(this).parent().prev().attr('type')=="date" ? 'AAAA-MM-DD' : '');
            $(this).parent().prev().attr('min', inputMin);
            }
            if ($(this).attr("id").startsWith('buttMax')) {
            var inputMax = prompt($(this).parent().prev().attr('type')=="date" ? "Indica la data màxima:" : "Indica el número mínim:", $(this).parent().prev().attr('type')=="date" ? 'AAAA-MM-DD' : '');
            $(this).parent().prev().attr('max', inputMax);
            }
        break;
    }
};

function modifyOption(){
    //console.log(contRadio);
    var form = $(this).attr("id");
    var contOp = 2;
    //<input type=\"radio\" name=\"radioOp_"+form+"\"><input id=\"textForm_"+form+"\" class=\"textForm\" readonly value=\" Option "+contRadio[form]+"\"><br>
    $("#radio_"+form).append("<input type=\"radio\" name=\"radioOp_"+form+"\"><input id=\"textForm_"+form+contRadio[form]+"\" class=\"textForm\" readonly value=\" Option "+contRadio[form]+"\"><br>");
    $("#textForm_"+form+contRadio[form]).dblclick(changeName);
    contRadio[form]++;
}

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


