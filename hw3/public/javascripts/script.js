$(document).ready(function () {
    sendOrder = function(){
        var amount = $("#amountDD").val();
        var topping = $('input[name="topping"]:checked').val();
        var textbox = $("#noteTA").val();
        var keyword = "vegan";
        if (textbox.indexOf(keyword) != -1) {
            alert("Cheesecakes contain dairy, and are not vegan");
        }
        else {
            $(".divOrder").hide();
            $("#orderPrompt").html("<p>Thank you! Your order has been placed:</p>");
            $("#orderPrompt").append("<p>" + amount + " " + topping + " cheesecake</p>");
            $("#orderPrompt").append("Notes: " + textbox);
        }
    }
    setMonth = function(){
        var monthId = $(this).attr('id');
        $("#monthButton").text($("#" + monthId).text());
    }
    $("#orderButton").click(sendOrder);
    $(".month").click(setMonth);
});