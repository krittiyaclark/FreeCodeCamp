$(document).ready(function() {
	function randomQuote() {
		var display = document.querySelector('#new-quote');

		$.ajax({
		    url: "https://api.forismatic.com/api/1.0/?",
		    dataType: "jsonp",
		    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		    success: function(json) {
		    	$('#quotation').html(('<i class="fas fa-quote-left"></i> ' + json.quoteText + ' <i class="fas fa-quote-right"></i>'));
				$('#author').html(('-- ' + json.quoteAuthor + ' --'));
				$('#tweet-quote').attr('href', 'https://twitter.com/home/?status=' + json.quoteText + '-- ' + json.quoteAuthor + ' --');
	     		},
	     	error:function(error){
	     		$('#quotation').text('ERROR!');
	     		$('#author').text('ERROR!');
	     	}
	  });
	}

	$(function() {
		randomQuote();
	});

	$('#new-quote').on('click', function(){
		randomQuote()
	});
});

