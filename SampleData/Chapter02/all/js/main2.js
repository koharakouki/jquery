
$(function(){
	$('#typo').css('color', '#ebc000');
});

$(function() {
	$('#typo .inner').css('transform', 'rotate(10deg)');
});

$(function() {
	$('#typo .inner').css('opacity', 0.5);
});

// $()は、「HTML要素を元にしてjQuery独自の要素を生成する」という機能を持っている関数
// →jQueryオブジェクト化するということ(jQueryの形式に変換された要素)


// $(function() { });
// は、ブラウザがHTMLを最後まで読み込むのを待つための仕組み
// 中に記述された処理をいったん予約状態にしておく

$(function() {
	$('#typo').css({
		fontSize: '50px',
		backgroundColor: "#ae5e9b",
		color: "#ebc000"
	})
});