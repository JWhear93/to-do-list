$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">'+ '<p class="itext">' + 'To-do: ' + '<strong>' + '<span class="newText">' + toAdd + '</span>' + '</strong>'+ ' - ' + '<span class="remover">' + 'X' + '</span>' + '</p>' + '<hr>' + '</div>');
        $(".item").animate({opacity: '1'});
    });
    $(document).on('click', '.remover', function () {
    	$(this).parent().fadeOut('medium', function () {
    		$(this).parent().remove();
    	});
    });
    $(document).on('click', '.remover2', function () {
    	$(this).parent().fadeOut('medium', function () {
    		$(this).parent().remove();
    	});
    });
    $('#clear').click(function () {
    	$('.list').empty();
    });
    $(document).on('dblclick', '.newText', function () {
    	var usrInput = prompt('Edit this task', 'Type here');
    	$(this).text(usrInput);
    });
});