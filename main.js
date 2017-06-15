$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">'+ '<p class="itext">' + 'To-do: ' + '<strong>' + toAdd + '</strong>'+ '<span class="remover">' + ' - Remove' + '</span>' + '</p>' + '<hr>' + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).remove();
    });
    $('#clear').click(function () {
    	$('.list').empty();
    });
});