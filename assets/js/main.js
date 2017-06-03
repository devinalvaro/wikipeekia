$(document).ready(function() {
    // Result Function //
    function search(value) {
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?&format=json&action=opensearch&search=" + encodeURI(value) + "&limit=10&namespace=0", function(respond) {
            $("body").css("margin", "20px auto");
            $("#boxes").html("");

            for (var i = 0; i < respond[1].length; i++) {
                // Result Boxes //
                $("#boxes").append("<div id='box" + (i + 1) + "' class='result-box'><p class='result-title'></p><p class='result-extract'></p></div>");

                // Result Title //
                $("#box" + (i + 1) + " .result-title").html(respond[1][i]);

                // Result Extract //
                $("#box" + (i + 1) + " .result-extract").html(respond[2][i]);

                // Result Link //
                $("#box" + (i + 1)).attr("onclick", "window.open('" + respond[3][i] + "', '_blank')");
            }
        });
    };

    // Search Events //
    var keyWords;

    $("#search-box").keypress(function(key) {
        if (key.which == 13) {
            keyWords = $("#search-box").val();
            search(keyWords);
        }
    });

    $("#search-btn").click(function() {
        keyWords = $("#search-box").val();
        search(keyWords);
    });
});
