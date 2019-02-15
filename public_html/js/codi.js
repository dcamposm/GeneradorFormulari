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
    
    
    $("#contForm_"+formArray[1]).append("<div id=\"contInput_"+formArray[1]+contNext[formArray[1]]+"\" class=\"contInput\"></div>");
    
    //alert(formArray[1]);
    switch (inp){
        case "Text":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari text: <input type=\"text\">");
            break;
        case "Numero":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari numero: <input type=\"number\">");
            break;
        case "Mail":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari correu: <input type=\"email\" value=\"Formulari correu\">");
            break;
        case "Password":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari Password: <input type=\"password\">");
            break;
        case "Date":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari data: <input type=\"date\">");
            break;
        case "File":
            $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("Formulari fitxer: <input type=\"file\">");
            break;
        case "Radio":
            if (contRadio[formArray[1]]==1){
                $("#contInput_"+formArray[1]).append("<div id=\"radio_"+formArray[1]+"\"></div>");                
            }            
            $("#radio_"+formArray[1]).append("<input type=\"radio\" name=\"radioOp_"+formArray[1]+"\"> Option "+contRadio[formArray[1]]+"<br>");
            contRadio[formArray[1]]++;
            break;
        case "NewRadio":
            //alert(contNext[formArray[1]]);
            $("#radio_"+formArray[1]).attr('id', 'radio_'+formArray[1]+contNextR[formArray[1]]);
            contNextR[formArray[1]]++;
            contRadio[formArray[1]]=1;
            
            $("#contInput_"+formArray[1]).append("<div id=\"radio_"+formArray[1]+"\"></div>");  
            $("#radio_"+formArray[1]).append("<input type=\"radio\" name=\"radioOp_"+formArray[1]+"\"> Option "+contRadio[formArray[1]]+"<br>");
            contRadio[formArray[1]]++;
            break;
        case "Checkbox":
            if (contCheck[formArray[1]]==1){
                $("#contInput_"+formArray[1]).append("<div id=\"check_"+formArray[1]+"\"></div>");
            }
            $("#check_"+formArray[1]).append("<input type=\"checkbox\" name=\"checkOp_"+formArray[1]+"\"> Option "+contCheck[formArray[1]]+"<br>");
            contCheck[formArray[1]]++;
            break;
        case "NewCheckbox":
            //alert(contNext[formArray[1]]);
            $("#contInput_"+formArray[1]).attr('id', 'check_'+formArray[1]+contNextC[formArray[1]]);
            contNextC[formArray[1]]++;
            contCheck[formArray[1]]=1;
            
            $("#contInput_"+formArray[1]).append("<div id=\"check_"+formArray[1]+"\"></div>");
            $("#check_"+formArray[1]).append("<input type=\"checkbox\" name=\"checkOp_"+formArray[1]+"\"> Option "+contCheck[formArray[1]]+"<br>");
            contCheck[formArray[1]]++;
            break;
        case "Selected":
            if (contSelect[formArray[1]]==1){
                $("#contInput_"+formArray[1]).append("<select id=\"select_"+formArray[1]+"\"></select><br>");
            }
            $("#select_"+formArray[1]).append("<option value=\"checkOp_"+formArray[1]+"\">Option"+contSelect[formArray[1]]+"</option>");
            contSelect[formArray[1]]++;
            break; 
        case "NewSelected":
            //alert(contNext[formArray[1]]);
            $("#select_"+formArray[1]).attr('id', 'select_'+formArray[1]+contNextS[formArray[1]]);
            contNextS[formArray[1]]++;
            contSelect[formArray[1]]=1;
            
            $("#contInput_"+formArray[1]).append("<select id=\"select_"+formArray[1]+"\"></select><br>");
            $("#select_"+formArray[1]).append("<option value=\"checkOp_"+formArray[1]+"\">Option"+contSelect[formArray[1]]+"</option>");
            contSelect[formArray[1]]++;
            break;
    }

    $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<button id=\"buttDel_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttDel\">X</button>");
    $("#contInput_"+formArray[1]+contNext[formArray[1]]).append("<button id=\"buttMod_"+formArray[1]+contNext[formArray[1]]+"\" class=\"buttMod\">M</button>");
    $("#buttDel_"+formArray[1]+contNext[formArray[1]]).click(deleteInput);
    $("#buttMod_"+formArray[1]+contNext[formArray[1]]).click(modifyInput);
    contNext[formArray[1]]++;
};

function deleteInput(){
  $(this).parent().remove();
};

function modifyInput(){
  console.log($(this).prev().attr('class'));
};

function generadorFormulari(){
   var nomForm = $('#form').val();
   var container = document.createElement("div");
   $(container).attr("id", nomForm+contGlobal);
   $(container).attr("class", "container");
   var titul = document.createElement("h1");
   var menu = document.createElement("div");
   $(menu).attr("class", "menu");
   var contForm = document.createElement("div");
   $(contForm).attr("id", "contForm_"+nomForm+contGlobal);
   $(contForm).attr("class", "contForm");
   
   /*---------------------MENU-----------------------*/
   $(menu).append("<h3>Menu</h3>");
   $(menu).append("<button id=\"inputText_"+nomForm+contGlobal+"\">Text</button>");
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
   $(titul).append(nomForm);
   
   $(container).append(titul);
   $(container).append(contForm);
   $(container).append(menu);
   
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
   
   contRadio[nomForm+contGlobal]=1;
   contCheck[nomForm+contGlobal]=1;
   contSelect[nomForm+contGlobal]=1;
   contNext[nomForm+contGlobal]=1;
   contNextR[nomForm+contGlobal]=1;
   contNextC[nomForm+contGlobal]=1;
   contNextS[nomForm+contGlobal]=1;
   contGlobal++;
};  


