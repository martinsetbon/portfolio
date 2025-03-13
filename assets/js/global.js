$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
        //autres animations au lieu de slide : fade (ca passe de l'un a lautre en fade)
        //direction:" vertical (les slide pass verticalement)
        //slideshow : true ou false ( pour que le slide soit automatique ou non)
        //slideshowSpeed : 2000 (par exemple) pour reglere le temp que reste un slide en miliseconde , par defaut il est reglé a 7 secondes
        //animationSpeed : 1000 (par exemple) la vitesse de passage d'un slide a un autre en miliseconde, par defaut a 600
        //controlNav : false ou true pour faire disparaitre ou pas les puces  (par defaut sur true)
        //randomize : true ou false pour faire passer les slides dans un ordre au hazard (par defaut sur false)
    });


    $('.mini-logo').on('click',function(){
        var m=$(this).attr('src');
        m=m.split('/');
        console.log(m[1]);
        $('#grandFormat').attr('src','assets/images/print/logos/'+m[5]);
    })  

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},200);

            }

        }); 

    });

});



