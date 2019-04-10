$('#get').click(function () {
    var formData = {
        "left": $("#left").val(),
        "bottom": $("#bottom").val(),
        "right": $("#right").val(),
        "top": $("#top").val()
    };
    $.ajax({
        type: "get",
        url: "/getRectangleInfo",
        data: formData,
        success: function (data) {
            console.log(data);
        }
    })
    return false;
})
$('#insert').click(function () {
    var formData = {
        "level":8,
        "left":120,
        "right":121,
        "low":28,
        "high":29
    };
    $.ajax({
        type: "get",
        url: "/getGrid",
        data: formData,
        success: function (data) {
            console.log(data);
        }
    })
    return false;
})