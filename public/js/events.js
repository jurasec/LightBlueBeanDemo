
$("#b1").click(function(){
	console.log('click b1');
	if( $( this ).attr('class').indexOf('button-clicked') > -1 )
		$( this ).removeClass("button-clicked");
	else
    	$( this ).addClass("button-clicked");  
});

$("#b2").click(function(){
	console.log('click b2');
	if( $( this ).attr('class').indexOf('button-clicked') > -1 )
		$( this ).removeClass("button-clicked");
	else
    	$( this ).addClass("button-clicked");  
});

$("#b3").click(function(){
	console.log('click b3');
	if( $( this ).attr('class').indexOf('button-clicked') > -1 )
		$( this ).removeClass("button-clicked");
	else
    	$( this ).addClass("button-clicked");  
});

/*
$( '#buttons' ).find( '*' ).each( function( ) { 
	//console.log( $(this) ) 
	//console.log('click b1');
	$( '#'+$( this ).attr( 'id' ) ).click( function( ) {
		console.log('click ', $( this ) );
		if( $( this ).attr( 'class' ).indexOf( 'button-clicked' ) > -1 )
			$( this ).removeClass( "button-clicked" );
		else
	    	$( this ).addClass( "button-clicked" );  
	});
});*/