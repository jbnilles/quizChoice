$(document).ready(function(){
  $('#warningSigns').submit(function(){
    event.preventDefault();
    let numWarningSigns = $("input:checkbox[name=warningSigns]:checked").length;
    let numSymptoms = $("input:checkbox[name=healthSymptoms]:checked").length;
    let numCoping = $("input:checkbox[name=copingMethods]:checked").length;
    $('#warningSigns').hide();
    //alert(numWarningSigns + ', ' + numSymptoms + ', ' + numCoping);
    if(numWarningSigns+numSymptoms-numCoping <= 0){
      $('#low').show();
    }
    else if(numWarningSigns+numSymptoms-numCoping <= 5){
      $('#medium').show();
    }
    else {
      $('#high').show();
    }
    
  });


});