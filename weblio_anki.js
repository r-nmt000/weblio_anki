javascript:
alert( function (){
    var Sentences = document.getElementsByClassName("tngMainTSRH");
    var Meanings  = document.getElementsByClassName("tngMainTSRFL");
    var Numbers = (Sentences.length)*2;
    var OutputData(Numbers);
    for(i=0; i < Numbers; i++){
	//outputdataに要素をぶっこんでく	
	OutputData[i] = ((Sentences[i].firstChild).textContent);
	OutputData[i+1] = ((Meanings[i].firstChild).textContent);
	

	//きれいに表示されるよう整理
    }
    return OutputData;
}    
)



javascript:(function(){
    var text='';
    $('table.tngMainT tr').each(function(){
	var line='';
	$(this).find('th,td').filter(function(){
	    var cn=$(this).attr('class');
	    return!cn.match(/tngMain[TH](VC|SH|SS|TS|CL|MK|CK|DT|LV|TG)/i);
	}).each(function(){
	    var cn=$(this).attr('class');
	    if(cn == "tngMainTSR"){
		
		&(this).find('.tngMainTSRG,.tngMainTSRFL').each(function(){
		    line+='"'+$(this).text().replace(/\"/g,'\"\"')+'",';
		}
	    }else{
       		line+='"'+$(this).text().replace(/\"/g,'\"\"')+'",';
	    }
	});
	text+=line.replace(/,$/,'')+'\r\n';
    });
    if(text){
	$('#csv').remove();
	$('body').prepend('<textarea id="csv"style="width:100%;height:10em;"></textarea>');
	$('#csv').val(text);
    }
})()