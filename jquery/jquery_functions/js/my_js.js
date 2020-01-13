$(document).ready(function(){
    
    $('.click_1 button').click(function(){
        alert("i am alerting you of an alert");
    });
    
    $('.hide_2 button').click(function(){
        $('.hide_2 p').hide();
    });

    $('.show_3 button').click(function(){
        $('.show_3 h2').show();
    });

    $('.toggle_4 button').click(function(){
        $('.toggle_4 p').toggle();
    });

    $('.slide_down_5 button').click(function(){
        $('.slide_down_5 h4').slideDown();
    });

    $('.slide_up_6 button').click(function(){
        $('.slide_up_6 h4').slideUp();
    });

    $('.slide_toggle_7 button').click(function(){
        $('.slide_toggle_7 h2').slideToggle();
    });

    $('.fade_in_8 button').click(function(){
        $('.fade_in_8 h3').fadeIn();
    });

    $('.fade_out_9 button').click(function(){
        $('.fade_out_9 h3').fadeOut();
    });

    $('.add_class_10 button').click(function(){
        $('.add_class_10 h2').addClass('xtremgreen');
    });

    $('.before_11 button').click(function(){
        $('.before_11 p').before("<h3>I am a new H3</h3>");
    });

    $('.after_12 button').click(function(){
        $('.after_12 button').after("<h3>I am a new H3</h3>");
    });

    $('.append_13 button').click(function(){
        $('.append_13 h1').append("<h3>I am a new H3</h3>");
    });

    $('.html_14 button').click(function(){
        $('.html_14 p').html("<h3>I am a new H3</h3>");
    });

    $('.attr_15 button').click(function(){
        $('.attr_15 p').attr("class","xtremgreen");
    });
    
    $('.val_16 button').click(function(){
        var input=$('.val_16 input').val();
        $('.val_16 p').text(input);
    });

    $('.text_17 button').click(function(){
        $('.text_17 p').text('this is new text we have created');
    });
});