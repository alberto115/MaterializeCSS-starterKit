var general = {
    init: function(){
        general.imagePopup();
        general.pushPin();
        general.galleryPopup();
    },

    imagePopup: function(){
        jQuery('.materialboxed').materialbox();
    },

    galleryPopup: function(){
        jQuery('.gallery-popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type:'image',

            gallery: {
                // options for gallery
                enabled: true,
                preload: [0,2], // read about this option in next Lazy-loading section

                navigateByImgClick: true,

                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            },

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    },

    pushPin: function(){
        var menu_offset = 0;
        var menu_top = jQuery('#block-eni-blog-main-menu').offset().top;
        if(jQuery('body').hasClass('user-logged-in')){
            menu_offset = 40;
            menu_top = menu_top + 40;
        };
        jQuery('#block-eni-blog-main-menu').pushpin({
            top: menu_top,
            offset: menu_offset
        });

    }
};

jQuery(document).ready(function(){
    //general.init();
});

