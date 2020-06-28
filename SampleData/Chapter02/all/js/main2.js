
// $(function(){
// 	$('#typo').css('color', '#ebc000');
// });

// $(function() {
// 	$('#typo .inner').css('transform', 'rotate(10deg)');
// });

// $(function() {
// 	$('#typo .inner').css('opacity', 0.5);
// });

// $()は、「HTML要素を元にしてjQuery独自の要素を生成する」という機能を持っている関数
// →jQueryオブジェクト化するということ(jQueryの形式に変換された要素)


// $(function() { });
// は、ブラウザがHTMLを最後まで読み込むのを待つための仕組み
// 中に記述された処理をいったん予約状態にしておく

// $(function() {
// 	$('#typo').css({
// 		fontSize: '50px',
// 		backgroundColor: "#ae5e9b",
// 		color: "#ebc000"
// 	})
// });

// $(function() {
// 	$('#typo .inner')
// 	.on('mouseover', function() {
// 		$(this).css('color', '#000');
// 	})
// 	.on('mouseout', function() {
// 		$(this).css('color', 'green');
// 	});
// });


// $(function() {
// 	$('#typo').on('click', function(){
// 		$('#typo .inner').animate({
// 			  opacity: 0,
// 			  fontSize: '0px'
// 		  }, 1500
// 		);
// 	});
// });


$(function() {
	$('#typo')
	  .on('mouseover', function(){
	  	$('#typo').stop(true).animate({
	  		  backgroundColor: '#ae5e9b'
	  	  }, 500
	  	);
	  })
	  .on('mouseout', function(){
	  	$(this).stop(true).animate({
	  		  backgroundColor: '#ebc000'
	  	  }, 500
	  	);
	  });
});