// $(function(){
// 	$('#typo').css('color', '#ebc000');
// });


// $(function(){
// 	$('#typo .inner').css('transform', 'rotate(10deg)');
// });


// $(function(){
// 	$('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
// });


// $(function(){
// 	$('#typo').on('mouseover', function(){
// 		$('#typo').css('color', '#ebc000');
// 	});
// });


// $(function(){
// 	$('#typo').on('click', function(){
// 		$('#typo').css('color', '#ebc000');
// 	});
// });


// $(function(){
// 	$('#typo').on('click', function(){
// 		$('#typo').css('background-color', "#ae5e9b");
// 		$('header').css('color', '#ae5e9b');
// 	});
// });


// $(function(){
// 	$('#typo').on('mouseover', function(){
// 		$('#typo').css({
// 			color: '#ebc000',
// 			backgroundColor: '#ae5e9b'
// 		});
// 	});
// 	$('#typo').on('mouseout', function(){
// 		$('#typo').css({
// 			color: '',
// 			backgroundColor: ''
// 		});
// 	});
// });


// $(function(){
// 	$('#typo')
// 	.on('mouseover', function(){
// 		$('#typo').css({
// 			color: '#ebc000',
// 			backgroundColor: '#ae5e9b'
// 		});
// 	})
// 	.on('mouseout', function(){
// 		$('#typo').css({
// 			color: '',
// 			backgroundColor: ''
// 		});
// 	});
// });


// $(function(){
// 	$('#typo').on('click', function(){
// 		$('#typo .inner').animate({
// 			opacity: 0,
// 			fontSize: '0px'
// 		  }, 1500
// 		);
// 	});
// });


// $(function(){
// 	$('#typo').on('click', function(){
// 		$('#typo .inner').animate({
// 			color: '#ebc000'
// 		  }, 1500
// 		);
// 	});
// });


// $(function(){
// 	  $('#typo .inner')
// 	      .css('top', '-100px')
// 	      .on('click', function(){
// 	     	    $('#typo .inner').animate({
// 	     	   	    top: '100px'
// 	     	    },
// 	     	    1500,
// 	     	    'swing'
// 	      );
// 	  });
// });


// $(function(){
// 	  $('#typo .inner')
// 	      .css('top', '-100px')
// 	      .on('click', function(){
// 	     	    $('#typo .inner').animate({
// 	     	   	    top: '100px'
// 	     	    },
// 	     	    1500,
// 	     	    'swing',
// 	     	    function(){
// 	     	    	$('#typo .inner').animate({top: '0px'}, 500);
// 	     	    }
// 	      );
// 	  });
// });


$(function(){
	$('#typo')
	  .on('mouseover', function(){
	  	$('#typo').stop(true).animate({
	  		backgroundColor: '#ae5e9b'
	  	},
	  	500);
	  })
	  .on('mouseout', function(){
	  	$('#typo').stop(true).animate({
	  		backgroundColor: '#3498db'
	  	},
	  	500);
	  });
});