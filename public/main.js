(function () {
    // $('.work').on('click', function(e){
    //   $('.org_work').toggleClass('show');
    //
    // });
    $('body').on('click','.work', function(e){
        e.preventDefault();
        $('.org_work').toggleClass('show');
    })

}());