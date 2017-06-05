

$(document).ready(function () {
    var timerId;
    var w;
    function timerGlobal(string) {
        var timer = setInterval(function () {
            document.getElementById(string).value +=1;
            if( document.getElementById(string).value ===100){
                clearInterval(timer);
            }
        },10);
    }
    function clearValue(string) {
        document.getElementById(string).value = 0;
    }

    $("#startSystem").click(function () {

        $("#instruction").hide(200);

        $("#sucessStart0").show(400,function () {
            $(this).next().show(1000,arguments.callee);
        });

        setTimeout(timerGlobal,1200,'startOneBar');
        setTimeout(timerGlobal,2400,'startTwoBar');
        setTimeout(timerGlobal,3600,'startThreeBar');
        setTimeout(timerGlobal,4800,'startForBar');
        setTimeout(timerGlobal,6000,'startFiveBar');
        

        function prom(){
            timerId = setInterval(circle,800);
        }
        setTimeout(prom,6500);

    });

    $("#stopSystem").click(function () {
        $("#sucessStart").hide();
        $("#instruction").hide();
        clearValue("startOneBar");
        clearValue("startTwoBar");
        clearValue("startThreeBar");
        clearValue("startForBar");
        clearValue("startFiveBar");
        clearTimeout();
        $("#sucessStop0").show(400,function () {
            $(this).next().show(1000,arguments.callee);
        });
        setTimeout(timerGlobal,1200,'stopOneBar');
        setTimeout(timerGlobal,2400,'stopTwoBar');
        setTimeout(timerGlobal,3600,'stopThreeBar');


        clearInterval(timerId);

    });



    function circle() {

            $("#main").find("#line1").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line2").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line3").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line33").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line4").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line41").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line42").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line43").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line44").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line5").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line6").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line7").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line8").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line9").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line10").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line11").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line12").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line13").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line14").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line15").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line16").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line17").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line18").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line19").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
            $("#main").find("#line20").effect("highlight", {color: "rgba(255,255,0,1)"}, 500);
        }







    $('#main').find('#block7').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });


    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $('#main').find('#block6').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form711')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close711, #overlay').click( function(){
        $('#modal_form711')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#main').find('#block8').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_formOKB')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_closeOKB, #overlay').click( function(){
        $('#modal_formOKB')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#main').find('#block3').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_formIEU')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_closeIEU, #overlay').click( function(){
        $('#modal_formIEU')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#main').find('#block9').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_formARH')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_closeARH, #overlay').click( function(){
        $('#modal_formARH')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#main').find('#block4').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form720')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close720, #overlay').click( function(){
        $('#modal_form720')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('#main').find('#block5').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form790')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close790, #overlay').click( function(){
        $('#modal_form790')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

});

