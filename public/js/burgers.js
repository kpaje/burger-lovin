$(function () {
    $(".change-sleep").on("click", function (event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
        var newSleepState = {
            sleepy: newSleep
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function () {
                console.log("changed sleep to", newSleep);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newCat = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new cat");
                location.reload();
            }
        );
    });
});