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
  $('#stressButton').click(function () {
    $('#intro').hide();
    $('#stressQuiz').show();

  });
  $('#fortuneButton').click(function () {
    $('#intro').hide();
    $('#fortuneQuiz').show();

  });
  $('#luckySigns').submit(function(){
    event.preventDefault();
    let numLucky = $("input:checkbox[name=Lucky]:checked").length;
    let numUnLucky = $("input:checkbox[name=Unlucky]:checked").length;
    $('#luckySigns').hide();
    //alert(numWarningSigns + ', ' + numSymptoms + ', ' + numCoping);
    if(numLucky - numUnLucky > 0){
      $('#highLuck').show();
    }
    else if(numLucky - numUnLucky === 0){
      $('#mediumLuck').show();
    }
    else {
      $('#lowLuck').show();
    }
    
  });


});