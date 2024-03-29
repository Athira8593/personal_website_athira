$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    // --                                    or leave a space here ^^
});

jQuery.validator.addMethod("noSpace", function(value, element) {
    return value == '' || value.trim(' ').length >=4;
  }, "At least four characters");

//email
$.validator.addMethod("isEmail", function(value, element) {
    return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);

});
//ajax call


$(document).ready(function (e) {
        $("#form").validate({
            rules:{
                name:{

                    required:true,
                    minlength:4,
                    alpha: true,
                    noSpace: true,
                },
                lname:{

                    required:true,
                    minlength:1,
                    alpha: true,

                },
                email:{
                    required:true,
                    isEmail:true
                },
                message:{
                    minlength:10,
                },
                mobile:{
                    number: true,
                    minlength:10,
                    maxlength:10
                },


            },
            messages:{
                name:{
                    alpha:"Please enter letters only"
                },
                email:{
                    isEmail:"Email not valid"
                },
                mobile:{
                    number:"Please enter a valid mobile",
                    minlength:"Please enter at least 10 digit",
                    maxlength:"mobile number maximum contain 10 digit",

                },




            },
            submitHandler:function(){
                $.ajax({
                url:"https://script.google.com/macros/s/AKfycbylVsFiAetl1Bf6-eU57LCVhWN0uF8zJsxjGb5wUQ/exec",
                 data:$("#form").serialize(),
                method:"post",
                success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
            }
        })

    })
