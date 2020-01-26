// doc. => https://jqueryvalidation.org/validate/

// validation form
$("#myform").validate({
  rules: {
    email: {
      required: true,
      
    },
    password: {
      required:  "#myCheckbox:checked",
      minlength: 2
    },
    myCheckbox: {
      required: true
    }
  },
  normalizer: function(value) {
    return $.trim(value);
  },
  errorElement: 'small',
  errorClass: "invalid",
  // errorPlacement: function(error,element) { // turn off message
  //   return true;
  // },
  messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  },
  submitHandler: function(form) {
    console.log(form)
  }
 });

 // disabled btn
//  $('#myform').on('change', function() {
//   if ($('#myCheckbox').prop('checked') && $('#myform').valid()) {
//     $('#submit').prop('disabled', false); 
// } else {
//     $('#submit').prop('disabled', 'disabled');
// }
// });