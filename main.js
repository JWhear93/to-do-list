$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">'+ '<p class="itext">' + 'To-do: ' + '<strong>' + toAdd + '</strong>'+ ' - ' + '<span class="remover">' + 'X' + '</span>' + '</p>' + '<hr>' + '</div>');
        $(".item").animate({opacity: '1'});
    });
    $(document).on('click', '.remover', function () {
    	$(this).parent().fadeOut('medium', function () {
    		$(this).parent().remove();
    	});
        
    });
    $('#clear').click(function () {
    	$('.list').empty();
    });
});