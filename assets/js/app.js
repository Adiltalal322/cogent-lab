document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidenav').classList.add('open');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidenav').classList.remove('open');
});

     w = $(window).width()
    xl = 1440
    md = 992
    ws = (w / 1440) * 10
    if (w >= md) {
        $("html").css("font-size", ws + "px")
    }
    $(window).on("resize", function () {
        w = $(window).width()
        xl = 1440
        md = 992
        ws = (w / 1440) * 10
        if (w >= md) {
            $("html").css("font-size", ws + "px")
        }
    })