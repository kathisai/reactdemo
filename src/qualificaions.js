OnChange="makeRequest(,ReturnQualificationResult,'#DivID#');"

function ChangeQualificationPeriod(url,targetid,divid,pvdate,viewfrom){
	el = this;
	while(!el.id.match(/^Module_/i) && el != document.body){
		el = el.parentNode;
	}
	var args = ['Qualifications','&TargetID='+targetid+'&viewpvdate='+pvdate+'&ViewFrom='+viewfrom];
	if(el != document.body) args.push(el);
	GetModule.apply(el,args);
	/*url=url + '&TargetID=' + targetid + '&DivID=' + divid + '&viewpvdate=' + pvdate + '&ViewFrom=' + viewfrom;

		$('#' + divid + '_Loader').addClass("active");
		$('#' + divid).html('');
	
		if ($('#' + divid)) {
			$.ajax({
		
				//this is the what we are hitting 
				url: url,
			
				//POST method is used
				type: "POST",
			
				//Do not cache the page
				cache: false,
			
				//success
				success: function(html){
					$('#' + divid + '_Loader').removeClass("active");	
					$('#' + divid).html(html);
					var el = document.getElementById(divid);
					evalScripts2(el);
							
				}
			});
			
		}*/
	
	//EVOTracking(viewfrom, 'Qualifications', 'Change Period');
}
function ChangeQualification(current,id,viewfrom)
{

	var selectobject=document.getElementById("RankSelect" + id);
	id_layer="qualification" + selectobject.value + '_' + id;
	$('#' + id_layer).show();

for (var i=0; i<selectobject.length; i++){
	no_id_layer="qualification" + selectobject.options[i].value  + '_' + id;

	if (document.getElementById(no_id_layer))
		document.getElementById(no_id_layer).style.display="none";

}
	$('#' + id_layer).show();
	//EVOTracking(viewfrom, 'Qualifications', 'Change Rank');
}