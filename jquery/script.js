var saved;
$(document).ready(function(){
    $('#selectAll').on('click',function(){
        if(this.click){
            $('.checkbox').each(function(){
                this.checked = true;
            });
        }else{
             $('.checkbox').each(function(){
                this.checked = false;
            });
        }
    });
    $('.checkbox').on('click',function(){
        if($('.checkbox:checked').length == $('.checkbox').length){
            $('#select_all').prop('checked',true);
        }else{
            $('#select_all').prop('checked',false);
        }
    });
    $('#clearAll').click(function() {

        $('input[type=checkbox]').each(function() 
        { 
                this.checked = false; 
        }); 
        });




    $('.redbtn').click(function() {
       $(":checked").parent().addClass("red");
       $(":checked").prop('checked',false);
    });

 

    $('.bluebtn').click(function() {
       $(":checked").parent().addClass("blue");
       $(":checked").prop('checked',false);
    });



    $('.yellowbtn').click(function() {
       $(":checked").parent().addClass("yellow");
       $(":checked").prop('checked',false);
    });



    $('.blackbtn').click(function() {
       $(":checked").parent().addClass("black");
       $(":checked").prop('checked',false);
    });



    $('.greenbtn').click(function() {
       $(":checked").parent().addClass("green");
       $(":checked").prop('checked',false);
    });



    $('.orangebtn').click(function() {
       $(":checked").parent().addClass("orange");
       $(":checked").prop('checked',false);
    });



    $('.brownbtn').click(function() {
       $(":checked").parent().addClass("brown");
       $(":checked").prop('checked',false);
    });



    $('.pinkbtn').click(function() {
       $(":checked").parent().addClass("pink");
       $(":checked").prop('checked',false);
    });



    $('.whitebtn').click(function() {
       $(":checked").parent().addClass("white");
       $(":checked").prop('checked',false);
    });



    $('.greybtn').click(function() {
       $(":checked").parent().addClass("grey");
       $(":checked").prop('checked',false);
    });

    $('.clrAllColrs').click(function() {
        $(":checked").parent().removeClass();
        $(":checked").prop('checked',false);
    }); 


    $("#sendTxtBtn").click(function() { 
        var text = $('#textsender').val();
        $(':checked').siblings().text(text);
        

    }); 
    

$('#removebtn').click(function() {
    if(saved) {
        $.merge(saved, $(':checked').parent().detach());
    } else {
        saved = $(':checked').parent().detach();
    }

    removedCounter = saved.length;
    $('#removed').html(removedCounter);
});


$('#restorebtn').click(function() {

    $(saved).appendTo('ul');
    removedCounter =0; 
    saved = null;
    $('#removed').html(removedCounter);

});





});


