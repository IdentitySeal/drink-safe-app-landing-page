// document.querySelector('#form-data').addEventListener('submit', e => {

//     e.preventDefault()
//     let input = document.querySelector('#input_mail').value;
//     console.log(input);
// });

// document.querySelector('#form-data').addEventListener('submit', formSubmission);

// function formSubmission(e) {
//     e.preventDefault();
//     let input = document.querySelector('#input_mail').value;
//     console.log(input);

//     fetch('subscribe.php', {
//             method: 'POST',
//             body: {
//                 email: 'email',
//                 submit: 'submit'
//             }
//         }).then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
$(document).ready(function() {
    $('#form-data').on('submit', function(e) {
        //Stop the form from submitting itself to the server.
        e.preventDefault();
        var email = $('#input_mail').val();
        $.ajax({
            type: "POST",
            url: 'subscribe.php',
            data: {
                email: email,
                submit: 'submit'
            },
            success: function(data) {
                $("#myModal").modal('show');
                $("#form-data")[0].reset();
                // alert(data);
            },
            error: function(data) {
                $("#errorModal").modal('show');
                $("#form-data")[0].reset();
            }
        });
    });
});