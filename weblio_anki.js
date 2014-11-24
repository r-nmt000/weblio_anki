javascript:(function(){
  var text = '';
  $('table.tngMainT tr').each(function(){
    var line = '';
    var pronunciation = '';
    var meaning = '';
    $(this).find('th,td').filter(function(){
      var cn = $(this).attr('class');
      return!cn.match(/tngMain[TH](VC|SH|SS|TS|CL|MK|CK|DT|LV|TG)/i);
    }).each(function(){
      var cn = $(this).attr('class');
      if(cn == "tngMainTSR"){
        $(this).find('.tngMainTSRH, .tngMainTSRHJ').each(function(){
          line += '"'+$(this).text().replace(/\"/g,'\"\"')+'";';
          line += pronunciation+meaning;});
        $(this).find('.tngMainTSRFL').each(function(){
          line += '"'+$(this).text().replace(/\"/g,'\"\"')+'";';});
      }else if(cn == 'tngMainTHT'){
        pronunciation= '"'+$(this).text().replace(/\"/g,'\"\"')+'";';
      }else if(cn == 'tngMainTIM'){
        meaning = '"'+$(this).text().replace(/\"/g,'\"\"')+'";';
      }
     });
     text += line.replace(/,$/,'')+'\r\n';
  });
  if(text){
    $('#csv').remove();$('body').prepend('<textarea id="csv"style="width:100%;height:10em;"></textarea>');
    $('#csv').val(text);
  }
})()
