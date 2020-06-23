// $(function () {

//     /*
//      * Back-toTop button (Smooth scroll)
//      */
//     $('.back-to-top').on('click', function () {

//         // Smooth Scroll プラグインを実行
//         $.smoothScroll({
//             easing: 'easeOutExpo', // イージングの種類
//             speed: 500             // 所要時間
//         });
//     });

// });

$(function(){
    $('.back-to-top').on('click', function(){
        $.smoothScroll({
            easing: 'easeOutExpo',
            speed: 500
        });
    });
});