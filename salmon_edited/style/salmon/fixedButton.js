$(document).on('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var w = $(this).width();
    var h = $(this).height();
    var angle = Math.atan2(y-(h), x-(w)) * (180/Math.PI);
    var rotate = angle + (180-45);
    $('.button.submitButton .compass')
        .css('-webkit-transform', 'rotate('+rotate+'deg)')
        .css('-moz-transform', 'rotate('+rotate+'deg)')
        .css('-ms-transform', 'rotate('+rotate+'deg)')
        .css('-o-transform', 'rotate('+rotate+'deg)')
        .css('transform', 'rotate('+rotate+'deg)');
});