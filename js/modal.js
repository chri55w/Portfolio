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