$(document).ready(function ()
{
    $(".modal-info").show();
    $(".modal-blog").hide();
    console.log("Ready");

    $(".info_btn").click(function ()
    {
        $(".modal-info").show();
        $(".modal-blog").hide();
        console.log("Info");
    });

    $(".blog_btn").click(function ()
    {
        $(".modal-info").hide();
        $(".modal-blog").show();
        console.log("Blog");
    });

    $('.close-modal').click(function ()
    {
        $(".modal-info").show();
        $(".modal-blog").hide();
        console.log("Close");
    });

    $('.btn-CloseModal').click(function ()
    {
        $(".modal-info").show();
        $(".modal-blog").hide();
        console.log("Close");
    });
    
});

function fadeOut(element) {
    var op = 0.1;
    var timer = setInterval
        (
            function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                element.style.filter = "alpha(opacity=" + op * 100 + ")";
                op -= op * 0.1;
            }, 50
        );
}

function fadeIn(element) {
    var op = 1;
    var timer = setInterval
        (
            function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                element.style.filter = "alpha(opacity=" + op * 100 + ")";
                op -= op * 0.1;
            }, 50
        );
}