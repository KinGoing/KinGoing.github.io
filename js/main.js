new Vue({
    el: '#app'
})

$(function () {

    $('[data-toggle="popover"]').popover();
    $("#refresh").click(function () {
        setProgress();
    });

    //自执行
    (function () {
        setTimeout(setProgress, 2000);
    })();

    function setProgress() {
        $('.pro1').css('width', '75%').text('75%');
        $('.pro2').css('width', '80%').text('80%');
        $('.pro3').css('width', '75%').text('75%');
        $('.pro4').css('width', '80%').text('80%');
        $('.pro5').css('width', '80%').text('80%');
        $('.pro6').css('width', '85%').text('85%');
        $('.pro7').css('width', '70%').text('70%');
        $('.pro8').css('width', '80%').text('80%');
    }

    $('.demo1').click(function () {
        window.open('http://www.cupinn.com/cupinn-app-mall/');
    });
    $('.demo2').click(function () {
        window.open('demo/guanli.html');
    });
    $('.demo3').click(function () {
        window.open('demo/zhuliu.html');
    });
    $('.demo4').click(function () {
        window.open('demo/hualang.html');
    });
    $('.demo5').click(function () {
        alert('不好意思，由于个人主页已经发布，此主页暂时不提供链接！');
    });
    $('.demo6').click(function () {
        alert('不好意思，由于个人主页已经发布，此主页暂时不提供链接！');
    });
});
