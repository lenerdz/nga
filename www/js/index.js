$(document).ready(function() {
    $(".button-collapse").sideNav({
        menuWidth: 200
    });
    var $toastContent = $('<span>I am toast content</span>').add($('<button class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 10000);
    //$('.tap-target').tapTarget('open');
    $('ul.tabs').tabs({
        swipeable: true,
        responsiveThreshold : Infinity
    });
});