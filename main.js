$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">' + 'To-do: ' + '<strong>' + toAdd + '</strong>' + ' - Remove' + '<hr>' + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).remove();
    });
    $('#clear').click(function () {
    	$('.list').empty();
    });
});