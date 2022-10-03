/*
let sendBtn = document.getElementById('send-button');

if(sendBtn){
    console.log("it is true");
    sendBtn.addEventListener('click', sendMessage());

} else {
    console.log("it is false");
}



function sendMessage() {
    console.log("send to message now!");
    const messageToSend = "mailto:adair.sempe@gmail.com?subject=&body=" + document.getElementById('message-textarea').value;
    window.location.href = messageToSend;
}


$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:test@test.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#fr1').submit();
    });
});
*/