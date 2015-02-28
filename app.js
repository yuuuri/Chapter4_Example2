var main = function () {
    "use strict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment;

        if  ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").tet($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    });

    $("comment-input input").on("keypress", function (event) {
        var $new_comment;

        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                var $new_comment = $("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $new_comment.fadeIn();
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });
};

$(document).ready(main);
