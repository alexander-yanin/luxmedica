/**
 * Created by iviakc on 03.03.17.
 */

$(document).ready(function() {



        $(".preparation_menu").each(function () {
            $(this).attr("style", "display:block");
        });


        $(".service-list_li-service").click(function () {
            $(".preparation").each(function () {
                $(this).stop(true).slideUp("normal");
            });

            $(this).children(".preparation").stop(true).slideDown("normal");
        });

});
