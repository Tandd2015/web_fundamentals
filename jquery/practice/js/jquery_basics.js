$(document).ready(function(){
    //---Select the HTML element/class/id:
    $('button');
    $('button.blue');
    $('button, .blue');
    $('#red');

    //---Add an event handler/ Event listner
    $('button').click();

    //---Write the action!
    $('button').click(function(){
        alert("You have clicked a button!")
    });
    
    //---Getters/setters
    $('#myParagraph').text();

    var myText = $('#myParagraph').text();
    alert(myText);

    $('button').click(function(){
        console.log('hello world')
        $('#myParagraph').text('see how I .text() works as a setter!');
    });

    //---- benefits of $(this) 
    $('#image1').click(function(){
        $('#image1').hide();
    });
    $('#image2').click(function(){
        $('#image2').hide();
    });
    $('#image3').click(function(){
        $('#image3').hide();
    });
    $('#image4').click(function(){
        $('#image4').hide();
    });
    $('#image5').click(function(){
        $('#image5').hide();
    });

    //attach a click event listener to all the img tags when the document is ready
    $('img').click(function(){
        $(this).hide();
    });

    //----using .ON() function to affect dynamically created content
    $(document).on('click', 'button', function(){
        alert('you clicked a button!')
    });

    $('button').click(function(){
        $('div').append('<h3>I am a dynamically generated h3 </h3>');
     });
    $(document).on('click', 'h3', function(){
        alert('You clicked me!');
    });

    $('button').click(function(){
        $('div').append('<h3>I am a new content</h3>');
       });
    $(document).on('mouseover', 'h3', function(){
        $(this).css('color', 'pink');

    });

    $('button').click(function(){
        $('div').append('<h3>I am a new content</h3>');
    });
    $('div.a').on('mouseover', 'h3', function(){ 
        $(this).css('color', 'pink');
    });

   //----callbacks

   $('h3').click( function() { alert('You clicked an H3!'); });

   // // // // new document.ready // // // //
$(document).ready(
    function() {
        $('h3').click(
            function() {
                alert('You clicked an H3!');
            }
        );
        $('button').click(
            function() {
                $('div').append('<h3>I am a dynamically generated H3</h3>');
            }
        );
    }
);

   // // // // new document.ready // // // //
$(document).ready( function() {
    $('h3').click( function() {
        alert('You clicked an H3!');
    });
    $('button').click( function() {
        $('div').append('<h3>I am a dynamically generated H3</h3>');
        $('h3').click( function() {
            alert('You clicked an H3!');   // **** here it is!
        });
    });
});

   // // // // new document.ready // // // //
function attach_h3_handlers() {
    $('h3').click( function() { alert('You clicked an H3!'); });
}
$(document).ready( function() {
    attach_h3_handlers();
    $('button').click( function() {
        $('div').append('<h3>I am a dynamically generated H3</h3>');
        attach_h3_handlers();
    });
});
 ////////////////////////////////////////////////////////////////////////////////

    ///--------Advanced jquery
    $('form').submit(function(){alert('you submitted me!');});

    $('h4').click(function(){
        $('form').submit();
    })

    $('form').submit(function(){
        return false;
    });

//    ------- .serialize()------ // array formated for backend computer use not human reader freindly format

    ///------------------------Taversing---PARENT,SIBLING,CHILD functions
    $('#myDiv').children().css('background-color', 'green');
    $('#myDiv').children('h3').css('background-color', 'green');

    $('h3, p').click(function(){
        $(this).parent().append('<h2>HOWDY CODING DOJO!</h2>');
    })

    $('h3, p').click(function(){
        $(this).siblings().hide();
    })

    $('button').click(function(){
        $(this).siblings().children().children().text('Michael Choi was here!')
    })
});
