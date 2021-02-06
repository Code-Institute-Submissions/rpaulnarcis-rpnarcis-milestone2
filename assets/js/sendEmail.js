function sendMail(contactForm) {
    emailjs.send("gmail", "template_rbh7yva", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }    
    );
    return false; 
}
    
function change() {
        var from_name=document.getElementById("fromName").value;
        document.getElementById("para").innerHTML="Hello "+from_name+" and welcome to Caribbean Dream.";
}

function greetingMessage() {
    var d=new Date();

    var day=new Array();
    day[0]="Sunday";
    day[1]="Monday";
    day[2]="Tuesday";
    day[3]="Wednesday";
    day[4]="Thursday";
    day[5]="Friday";
    day[6]="Saturday";

    var date=day[d.getDay()];

    var time=d.getHours();
        if (time<12) {
            document.getElementById("greeting").innerHTML="Good morinig today is "+date+"!";
        }
        else if (time<18) {
            document.getElementById("greeting").innerHTML="Good afternoon today is "+date+"!";
        }
        else {
            document.getElementById("greeting").innerHTML="Have a nice day "+date+"!";
        }

}

function clear(){
  	document.getElementById('myform').value = ''
}


