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


// $(function(){
// 	$('#typo')
// 	  .on('mouseover', function(){
// 	  	$('#typo').stop(true).animate({
// 	  		backgroundColor: '#ae5e9b'
// 	  	},
// 	  	500);
// 	  })
// 	  .on('mouseout', function(){
// 	  	$('#typo').stop(true).animate({
// 	  		backgroundColor: '#3498db'
// 	  	},
// 	  	500);
// 	  });
// });


// var arg = {
// 	     'font-size': '10px',
// 	     'background-color': '#ae5e9b',
// 	     'color': '#ebc000'
//       };

// $(function(){
// 	$('#typo').on('click', function(){
// 		$('#typo').css(arg);
// 	});
// });
// $('header').css(arg);



// var obj = { a: 100, b: 200 };
// var data;

// data = obj.a + obj.b;
// data = obj['a'] + obj['b']



// var array = [ 100, 200, 300 ];
// var sum;

// sum = array[0] + array[2];
// sum = array[1] + array[2];


// $(function(){
// 	$('#typo').on('click', function(){
// 		$(this).css('color', '#ae5e9b');
// 	});
// });


// $(function(){
// 	function ChangeColor(){
// 		$(this).css('color', '#ebc000');
// 	};

// 	$('#typo').on('click', ChangeColor);
// });


// $(function(){
// 	$('header, #typo, footer')
// 	.on('mouseover', function(){
// 		$(this).css('background-color', '#ebc000');
// 	})
// 	.on('mouseout', function(){
// 		$(this).css('background-color', '');
// 	});
// });


// function add(num1, num2){
//   return num1 + num2;
// }

// var added1 = add(1, 3);


// var add = function(num1, num2){
// 	return num1 + num2;
// }

// var added1 = add(1, 3);


