Lungo.init({
	"name" : "Contador de mus",
	"version" : "0.0.1"
});

function incVaca(team){
	$('#team1Marker').html(0);
	$('#team2Marker').html(0);
	var value = parseInt($('#' + team).html());
	if(value < 3){
		value++;
	}
	$('#' + team).html(value);
	if(value == 3){
		var teamTag;
		if(team == 'team1GlobalMarker'){
			teamTag = 'team1Name';
		}else{
			teamTag = 'team2Name';
		}
		// Lungo.Notification.success(
		//     "Victoria",                  							//Title
		//     "Ganador de la vaca: " + $('#' + teamTag).html(),     	//Description
		//     "check",                    							//Icon
		//     7,                         								//Time on screen
		//     function(){}
		// );
		Lungo.Notification.confirm({
		    icon: 'check',
		    title: 'Victoria',
		    description: "Ganador de la vaca: " + $('#' + teamTag).html(),
		    accept: {
		        icon: 'facebook',
		        label: 'Compartir',
		        callback: function(){
		        	//$('#counter_article').trigger('share');
		        	var text = "";
		        	if(teamTag == 'team1Name'){
		        		text = $('#team1Name').html() + ' ha ganado a ' + $('#team2Name').html() + ' con un resultado de ' + $('#team1GlobalMarker').html() + ' - ' + $('#team2GlobalMarker').html() 
		        	}else{
		        		text = $('#team2Name').html() + ' ha ganado a ' + $('#team1Name').html() + ' con un resultado de ' + $('#team2GlobalMarker').html() + ' - ' + $('#team1GlobalMarker').html() 
		        	}
		        	window.open("http://twitter.com/share?text=" + text + "&hashtags=Muscounter", '_system');
		      //   	FB.ui({
				    //  method: 'share_open_graph',
				    //  action_type: 'og.likes',
				    //  action_properties: JSON.stringify({
				    //   object:'https://developers.facebook.com/docs/',
				    //  })
				    // }, function(response){});
		        }
		    },
		    cancel: {
		        icon: 'repeat',
		        label: 'Volver a jugar',
		        callback: function(){ $('#goPlay').trigger('click'); }
		    }
		});
	}
}

function incMarker(team){
	var value = parseInt($('#' + team).html());
	if(value < 30){
		value++;
	}
	$('#' + team).html(value);
	if(value == 30){
		var teamTag;
		var globalTeamTag;
		if(team == 'team1Marker'){
			teamTag = 'team1Name';
			globalTeamTag = 'team1GlobalMarker'
		}else{
			teamTag = 'team2Name';
			globalTeamTag = 'team2GlobalMarker'
		}
		Lungo.Notification.success(
		    "Victoria",                  							//Title
		    "Victoria del " + $('#' + teamTag).html(),     			//Description
		    "check",                    							//Icon
		    7,                          							//Time on screen
		    incVaca(globalTeamTag)		           					//Callback function
		);
	}
}

$('#goPlay').on('click', function(e){
	var team1InputName = $('#team1InputName').val();
	var team2InputName = $('#team2InputName').val();
		if(team1InputName == '' || team2InputName == ''){
		Lungo.Notification.error(
		    "Error",                      					//Title
		    "Debes insertar un nombre para los equipos",    //Description
		    "remove",                     					//Icon
		    5,                            					//Time on screen
		    function(){}
		);
	}else{
		$('#team1Name').html(team1InputName);
		$('#team2Name').html(team2InputName);
		$('#team1GlobalName').html(team1InputName);
		$('#team2GlobalName').html(team2InputName);
		$('#team1Marker').html(0);
		$('#team2Marker').html(0);
		$('#team1GlobalMarker').html(0);
		$('#team2GlobalMarker').html(0);
		Lungo.Router.section('counter_section');
	}
});

$('#team1IncMarker').on('click', function(e){
	incMarker('team1Marker');
	// var value = parseInt($('#team1Marker').html());
	// if(value < 30){
	// 	value++;
	// }
	// $('#team1Marker').html(value);
	// if(value == 30){
	// 	Lungo.Notification.success(
	// 	    "Victoria",                  					//Title
	// 	    "Victoria del " + $('#team1Name').html(),     	//Description
	// 	    "check",                    					//Icon
	// 	    7,                          					//Time on screen
	// 	    incVaca('team1GlobalMarker')		           	//Callback function
	// 	);
	// }
});

$('#team1DecMarker').on('click', function(e){
	var value = parseInt($('#team1Marker').html());
	if(value > 0){
		value--;
	}
	$('#team1Marker').html(value);
});

$('#team2IncMarker').on('click', function(e){
	incMarker('team2Marker');
	// var value = parseInt($('#team2Marker').html());
	// if(value < 30){
	// 	value++;
	// }
	// $('#team2Marker').html(value);
	// if(value == 30){
	// 	Lungo.Notification.success(
	// 	    "Success",                  					//Title
	// 	    "Victoria del " + $('#team2Name').html(),     	//Description
	// 	    "check",                    					//Icon
	// 	    7,                         						//Time on screen
	// 	    incVaca('team2GlobalMarker')
	// 	);
	// }
});

$('#team2DecMarker').on('click', function(e){
	var value = parseInt($('#team2Marker').html());
	if(value > 0){
		value--;
	}
	$('#team2Marker').html(value);
});

$('#team1IncVaca').on('click', function(e){
	incVaca('team1GlobalMarker')
});

$('#team2IncVaca').on('click', function(e){
	incVaca('team2GlobalMarker')
});