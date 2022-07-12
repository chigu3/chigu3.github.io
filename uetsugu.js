$(function () {
    $('body *').removeAttr('style');
});


$(function () {
    var offset = $('#headNav').offset();
    var nav = $('#headNav');
    var navHeight = nav.outerHeight();


    $(window).on('load resize', function () {

        $(window).scroll(function () {

            var winW = $(window).width();
            var devW = 1000;
            var devS = 670;
            if ($(window).scrollTop() > offset.top && winW > devW) {
                $('body *').removeAttr('style');
                $('#about-in').css('margin-top', navHeight);
                $('#headNav').addClass('fixed');
            } else if ($(window).scrollTop() > offset.top && winW <= devW && winW > devS) {

                $('body *').removeAttr('style');
                $('#about-in').css('margin-top', navHeight);
                $('#headNav').addClass('fixed');
            } else {
                $('body *').removeAttr('style');
                $('#headNav').removeClass('fixed');
                $('#about-in').css('margin-top', 0);
            }
        });
        offset = $('#headNav').offset();
        navHeight = nav.outerHeight();
    });
});

$('body *').removeAttr('style');





$("#about").click(function () {
    var positionA = $("#about-in").offset().top - $('#headNav').innerHeight() + 2;
    var positionMinA = $("#about-in").offset().top;
    if ($(window).width() < 670) {
        $("html,body").animate({
            scrollTop: positionMinA
        }, {
            queue: false
        });
    } else {
        $("html,body").animate({
            scrollTop: positionA
        }, {
            queue: false
        });

    }

    return false;
});



$("#skill").click(function () {
    var positionS = $("#skill-in").offset().top - $('#headNav').innerHeight() + 2;
    var positionMinS = $("#skill-in").offset().top;
    if ($(window).width() < 670) {
        $("html,body").animate({
            scrollTop: positionMinS
        }, {
            queue: false
        });
    } else {
        $("html,body").animate({
            scrollTop: positionS
        }, {
            queue: false
        });

    }

    return false;
});

$("#works").click(function () {
    var positionW = $("#works-in").offset().top - $('#headNav').innerHeight() + 2;
    var positionMinW = $("#works-in").offset().top;
    if ($(window).width() < 670) {
        $("html,body").animate({
            scrollTop: positionMinW
        }, {
            queue: false
        });
    } else {
        $("html,body").animate({
            scrollTop: positionW
        }, {
            queue: false
        });


    }
    return false;
});


$("#contact").click(function () {
    var positionC = $("#contact-in").offset().top - $('#headNav').innerHeight() + 2;
    var positionMinC = $("#contact-in").offset().top;
    if ($(window).width() < 670) {
        $("html,body").animate({
            scrollTop: positionMinC
        }, {
            queue: false
        });
    } else {
        $("html,body").animate({
            scrollTop: positionC
        }, {
            queue: false
        });

    }

    return false;

});

$("#hobby-show").click(function () {
    var positionH = $("#hobby").offset().top - $('#headNav').innerHeight() + 2;
    var positionHo = $("#hobby").offset().top;
    if ($(window).width() < 670) {
        $("html,body").animate({
            scrollTop: positionHo
        }, {
            queue: false
        });
    } else {
        $("html,body").animate({
            scrollTop: positionH
        }, {
            queue: false
        });

    }

    return false;
});

$(function(){
    $('#coin-in').hover(function(){
        $(this).css("opacity", 1);
        $('#text-coin').css("opacity", 0.9);
    },function() {
        $(this).css("opacity", 0.5);
        $('#text-coin').css("opacity", 0);
      });
});
        
$(function(){
    $('#hand-in').hover(function(){
        $(this).css("opacity", 1);
        $('#text-hand').css("opacity", 0.9);
        
    }, function() {
        $(this).css("opacity", 0.5);
        $('#text-hand').css("opacity", 0);
    });
});
        
$(function(){
    $('#bag-in').hover(function(){
        $(this).css("opacity", 1);
        $('#text-bag').css("opacity", 0.9);
    }, function() {
        $(this).css("opacity", 0.5);
        $('#text-bag').css("opacity", 0);
    
    });
});
        
$(function(){
    $('#rejin-in').hover(function(){
        $(this).css("opacity", 1);
        $('#text-rejin').css("opacity", 0.9);
    }, function() {
        $(this).css("opacity", 0.5);
        $('#text-rejin').css("opacity", 0);
    
    });
});

        




$(function () {
    $(window).scroll(function () {
        var positionHobby = $("#hobby").offset().top - $('#headNav').innerHeight() - 300 ;
        var positionHobbyIn = $("#hobby").offset().top - 500;
        if ($(window).width() < 670) {
            if (positionHobbyIn  <= $(window).scrollTop() && positionHobbyIn + 1750 > $(window).scrollTop()) {
                $('.hand').addClass('show-hand');
                $('.coin').addClass('show-hand');
                $('.bag').addClass('show-hand');
                $('.rejin').addClass('show-hand');
            } else {
                $('.hand').removeClass('show-hand');
                $('.coin').removeClass('show-hand');
                $('.bag').removeClass('show-hand');
                $('.rejin').removeClass('show-hand');
            }
        } else {
            if (positionHobby <= $(window).scrollTop() && positionHobby  + 500 > $(window).scrollTop()) {
                $('.hand').addClass('show-hand');
                $('.coin').addClass('show-hand');
                $('.bag').addClass('show-hand');
                $('.rejin').addClass('show-hand');
            } else {
                $('.hand').removeClass('show-hand');
                $('.coin').removeClass('show-hand');
                $('.bag').removeClass('show-hand');
                $('.rejin').removeClass('show-hand');
            }

        }
    });
});
$(function () {
    $(window).scroll(function () {
        var positionImg = $("#table").offset().top - $('#headNav').innerHeight() - 400;
        var positionImgIn = $("#table").offset().top - 530;
        if ($(window).width() < 670) {
            if (positionImgIn  <= $(window).scrollTop() && positionImgIn + 500 >  $(window).scrollTop()) {
                $('#table').addClass('show');
            } else {
                $('#table').removeClass('show');
            }
        } else {
            if (positionImg <= $(window).scrollTop() && positionImg + 550 > $(window).scrollTop() ) {
                $('#table').addClass('show');
            } else {
                $('#table').removeClass('show');
            }

        }
    });
});


$(function(){
    $('#css-in').hover(function(){
        $('#css-first').css("opacity", 1);
    }, function() {
        $('#css-first').css("opacity", 0.35);
    
    });
});
$(function(){
    $('#ruby').hover(function(){
        $('#ruby-first').css("opacity", 1);
        $('#ruby-in').css("opacity", 1);
    }, function() {
        $('#ruby-first').css("opacity", 0.35);
        $('#ruby-in').css("opacity", 0.35);
    
    });
});
$(function(){
    $('#js').hover(function(){
        $('#js-first').css("opacity", 1);
    }, function() {
        $('#js-first').css("opacity", 0.35);
    
    });
});

$('#wave').wavify({
    height: 15,
    bones: 3,
    amplitude: 40,
    color: 'rgba(240,190,270, 0.3)',
    speed: .1
});
$('#wave-in').wavify({
    height: 20,
    bones: 3,
    amplitude: 40,
    color: 'rgba(220,200,270, 0.2)',
    speed: .4
}); 
$('#wave-back').wavify({
    height: 15,
    bones: 3,
    amplitude: 40,
    color: 'rgba(210,230,270, 0.4)',
    speed: .8
}); 