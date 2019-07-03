$(document).ready(function () {
    var count;
    var number;

    function getRandom(max, min) {
        return Math.round(Math.random() * max + min);
    }
    // Give the final value and crystal value
    $("button").click(function () {
        //
        count = 0;
        $("#count").text("");
        number = getRandom(50, 30);
        $("#result").text(number);
        //
        for (let i = 0; i < 4; i++) {
            var crystalValue = getRandom(9, 1);
            var r = getRandom(255, 0);
            var g = getRandom(255, 0);
            var b = getRandom(255, 0);
            $("li")
                .eq(i)
                .val(crystalValue)
                .css("background-color", "rgb(" + r + "," + g + "," + b + ")");
        }
    });

    $("li").click(function () {
        // console.log(typeof $(this).val());
        count += $(this).val();
        $("#count").text(count);
        if (count == number) {
            alert("You Win!");
            location.reload();
        }
        if (count > number) {
            alert("opps you lose the game");
            location.reload();
        }
    });
});