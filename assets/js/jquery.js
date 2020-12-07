$(document) .ready(function() {
    $(".back_image").hover(function(){
        $(".vertical_text") .fadeToggle("slow");
    });
});

$(function(){
    $("#add_name").validate({
        rules: {
            ex_model: {
                required: true,
                minlength: 8
            },
            ex_serial: "required"
        },
        messages: {
            ex_model: {
                required: "Please enter  modaldata",
                minlength: "Your data must be at least 8 characters"
            },      
            ex_serial: "Please enter some data"
        }
    })

    $("#subBtn").on("click", function(){
        if($("#add_name").valid()){
            //alert("success");
            $("#myModal").modal("show");
        } else {
            //alert("Values are not entered");
            //whatever you want to do when values are not entered
        }
        return false;
    });
})