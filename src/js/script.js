    //Modal

    $('.modal__close').on('click', function () {
        $('.overlay, #order').fadeOut('slow');
    });

    $('.main__sendBtn').each(function(i) {
        $(this).on('click', function() {
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: 'Пожалуйста, введите свой номер телефона',
                email: {
                  required: "Пожалуйста, введите свой имайл",
                  email: "Введите корректный имейл. Пример: name@domain.com."
                }
              }
            
        });
    };

    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

     $('form').submit(function(e) {
        e.preventDefault();
        return false;
     });

    const dbuttons = document.querySelectorAll('.main__dbtn');
    const pbuttons = document.querySelectorAll('.main__pbtn');
    
     dbuttons.forEach(
        item => item.addEventListener('click', function() {
            item.classList.toggle('active');
        })
      );

      pbuttons.forEach(
        item => item.addEventListener('click', function() {
            item.classList.toggle('active');
        })
      );
    


